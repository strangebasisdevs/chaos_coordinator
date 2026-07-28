// Centralized streaming schedule data.
// Times below are authored in STREAM_TIMEZONE and converted to each
// visitor's local timezone automatically on the Streaming page.

export interface StreamScheduleItem {
  day: string; // Display label, e.g. "Monday" (fallback before local conversion)
  dayIndex: number; // 0 (Sunday) - 6 (Saturday), matches Date.prototype.getDay()
  activity: string;
  startHour: number; // 24-hour clock, in STREAM_TIMEZONE
  startMinute: number;
  endHour: number;
  endMinute: number;
}

// IANA timezone the schedule below is authored in. Update this if the
// streamer's home timezone changes; all displayed times are derived from it.
export const STREAM_TIMEZONE = 'America/New_York';

// Edit this list to adjust the streaming schedule. Order is preserved when
// rendering the schedule grid.
export const streamSchedule: StreamScheduleItem[] = [
  {
    day: 'Monday',
    dayIndex: 1,
    activity: 'Trackmania Weekly Discovery',
    startHour: 19,
    startMinute: 0,
    endHour: 20,
    endMinute: 30,
  },
//   {
//     day: 'Wednesday',
//     dayIndex: 3,
//     activity: 'Creative Coding',
//     startHour: 19,
//     startMinute: 0,
//     endHour: 21,
//     endMinute: 0,
//   },
//   {
//     day: 'Friday',
//     dayIndex: 5,
//     activity: 'Community Playtime',
//     startHour: 20,
//     startMinute: 0,
//     endHour: 22,
//     endMinute: 0,
//   },
];
