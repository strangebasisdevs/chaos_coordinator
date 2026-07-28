'use client';

import { useEffect, useState } from 'react';
import { streamSchedule, STREAM_TIMEZONE } from '@/data/streaming';
import {
  getStreamStatus,
  formatOccurrence,
  type StreamOccurrence,
} from '@/lib/streamSchedule';

interface StatusState {
  isLive: boolean;
  occurrence: StreamOccurrence | null;
}

export default function StreamStatusBanner() {
  const [status, setStatus] = useState<StatusState | null>(null);

  useEffect(() => {
    const update = () => {
      const result = getStreamStatus(streamSchedule, STREAM_TIMEZONE);
      setStatus({
        isLive: result.isLive,
        occurrence: result.next,
      });
    };
    update();
    const interval = setInterval(update, 60_000);
    return () => clearInterval(interval);
  }, []);

  const isLive = status?.isLive ?? false;
  const occurrence = status?.occurrence ?? null;
  const formatted = occurrence ? formatOccurrence(occurrence) : null;

  let message = 'Check social media for updates';
  if (formatted && occurrence) {
    message = isLive
      ? `Streaming ${occurrence.item.activity} now — until ${formatted.endLabel} ${formatted.zoneLabel}`
      : `Next stream: ${formatted.dayLabel} — ${occurrence.item.activity} at ${formatted.startLabel} ${formatted.zoneLabel}`;
  }

  return (
    <div className="flex items-center space-x-4">
      <div
        className={`w-4 h-4 rounded-full animate-pulse ${
          isLive ? 'bg-green-500' : 'bg-red-500'
        }`}
      ></div>
      <div>
        <h3 className="text-white font-semibold">
          {isLive ? 'Live Now' : 'Currently Offline'}
        </h3>
        <p className="text-gray-300">{message}</p>
      </div>
    </div>
  );
}
