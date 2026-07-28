'use client';

import { useEffect, useState } from 'react';
import { streamSchedule, STREAM_TIMEZONE } from '@/data/streaming';
import {
  getUpcomingOccurrences,
  formatOccurrence,
  type StreamOccurrence,
} from '@/lib/streamSchedule';

export default function StreamScheduleGrid() {
  const [occurrences, setOccurrences] = useState<StreamOccurrence[] | null>(null);

  useEffect(() => {
    setOccurrences(getUpcomingOccurrences(streamSchedule, STREAM_TIMEZONE));
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6 text-center">
      {streamSchedule.map((item, index) => {
        const occurrence = occurrences?.[index];
        const formatted = occurrence ? formatOccurrence(occurrence) : null;

        return (
          <div
            key={`${item.day}-${index}`}
            className="bg-white/5 rounded-lg p-4 w-full sm:w-72"
          >
            <h4 className="font-semibold text-purple-400 mb-2">
              {formatted?.dayLabel ?? item.day}
            </h4>
            <p className="text-gray-300">{item.activity}</p>
            <p className="text-sm text-gray-400">
              {formatted
                ? `${formatted.startLabel} - ${formatted.endLabel} ${formatted.zoneLabel}`
                : 'Loading local time…'}
            </p>
          </div>
        );
      })}
    </div>
  );
}
