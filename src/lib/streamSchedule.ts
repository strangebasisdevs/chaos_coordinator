// Utilities for converting the streaming schedule (authored in a fixed
// reference timezone) into absolute instants, and for formatting those
// instants in whichever timezone the caller's environment resolves to
// (i.e. the site visitor's local timezone when run in the browser).

import type { StreamScheduleItem } from '@/data/streaming';

export interface StreamOccurrence {
  item: StreamScheduleItem;
  start: Date;
  end: Date;
}

interface ZonedDateParts {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

function getZonedDateParts(instant: Date, timeZone: string): ZonedDateParts {
  const dtf = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  const parts = dtf.formatToParts(instant).reduce<Record<string, string>>((acc, part) => {
    acc[part.type] = part.value;
    return acc;
  }, {});
  return {
    year: Number(parts.year),
    month: Number(parts.month),
    day: Number(parts.day),
    hour: Number(parts.hour),
    minute: Number(parts.minute),
    second: Number(parts.second),
  };
}

function getTimeZoneOffsetMinutes(instant: Date, timeZone: string): number {
  const zoned = getZonedDateParts(instant, timeZone);
  const asUTC = Date.UTC(
    zoned.year,
    zoned.month - 1,
    zoned.day,
    zoned.hour,
    zoned.minute,
    zoned.second
  );
  return (asUTC - instant.getTime()) / 60000;
}

/** Converts a wall-clock date/time authored in `timeZone` into an absolute UTC Date. */
function zonedTimeToUtc(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  timeZone: string
): Date {
  const guess = Date.UTC(year, month - 1, day, hour, minute);
  const offsetMinutes = getTimeZoneOffsetMinutes(new Date(guess), timeZone);
  return new Date(guess - offsetMinutes * 60000);
}

function buildOccurrence(
  item: StreamScheduleItem,
  year: number,
  month: number,
  day: number,
  timeZone: string
): StreamOccurrence {
  return {
    item,
    start: zonedTimeToUtc(year, month, day, item.startHour, item.startMinute, timeZone),
    end: zonedTimeToUtc(year, month, day, item.endHour, item.endMinute, timeZone),
  };
}

/**
 * Returns the next upcoming (or currently in-progress) occurrence for each
 * schedule item, in the same order as the input schedule.
 */
export function getUpcomingOccurrences(
  schedule: StreamScheduleItem[],
  timeZone: string,
  now: Date = new Date()
): StreamOccurrence[] {
  const zonedNow = getZonedDateParts(now, timeZone);
  const base = new Date(zonedNow.year, zonedNow.month - 1, zonedNow.day);

  return schedule.map((item) => {
    for (let offset = 0; offset < 8; offset++) {
      const candidateDate = new Date(base);
      candidateDate.setDate(candidateDate.getDate() + offset);
      if (candidateDate.getDay() !== item.dayIndex) continue;
      const occurrence = buildOccurrence(
        item,
        candidateDate.getFullYear(),
        candidateDate.getMonth() + 1,
        candidateDate.getDate(),
        timeZone
      );
      if (occurrence.end > now) return occurrence;
    }
    // Should be unreachable with an 8-day search window, but guard anyway.
    return buildOccurrence(item, zonedNow.year, zonedNow.month, zonedNow.day, timeZone);
  });
}

/** Determines whether a stream is currently live and what the next occurrence is. */
export function getStreamStatus(
  schedule: StreamScheduleItem[],
  timeZone: string,
  now: Date = new Date()
): { isLive: boolean; current: StreamOccurrence | null; next: StreamOccurrence | null } {
  const occurrences = getUpcomingOccurrences(schedule, timeZone, now);
  const current = occurrences.find((occ) => now >= occ.start && now < occ.end) ?? null;
  const upcoming = occurrences
    .filter((occ) => occ.start > now)
    .sort((a, b) => a.start.getTime() - b.start.getTime());

  return {
    isLive: !!current,
    current,
    next: current ?? upcoming[0] ?? null,
  };
}

export interface FormattedOccurrence {
  dayLabel: string;
  startLabel: string;
  endLabel: string;
  zoneLabel: string;
}

/** Formats an occurrence's start/end using the caller's local timezone. */
export function formatOccurrence(occurrence: StreamOccurrence): FormattedOccurrence {
  const dayLabel = new Intl.DateTimeFormat(undefined, { weekday: 'long' }).format(
    occurrence.start
  );
  const timeFmt = new Intl.DateTimeFormat(undefined, { hour: 'numeric', minute: '2-digit' });
  const zoneParts = new Intl.DateTimeFormat(undefined, {
    hour: 'numeric',
    timeZoneName: 'short',
  }).formatToParts(occurrence.end);

  return {
    dayLabel,
    startLabel: timeFmt.format(occurrence.start),
    endLabel: timeFmt.format(occurrence.end),
    zoneLabel: zoneParts.find((part) => part.type === 'timeZoneName')?.value ?? '',
  };
}
