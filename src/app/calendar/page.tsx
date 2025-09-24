"use client";

import { db } from "../../lib/instant";

export default function CalendarPage() {
  const { isLoading, error, data } = db.useQuery({ events: {} });
  const events = ((data as any)?.events as any[]) || [];

  return (
    <main className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Calendar</h1>
        {isLoading && <div className="text-gray-500">Loading events…</div>}
        {error && (
          <div className="text-red-600">Failed to load events: {error.message}</div>
        )}
        <ul className="divide-y divide-gray-200 bg-white border border-gray-200 rounded-lg">
          {(events.length ? events : []).map((e: any, idx: number) => (
            <li key={e.id || idx} className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm text-gray-500">
                    {e.startAt ? new Date(e.startAt).toLocaleString() : "TBA"}
                    {e.endAt ? ` – ${new Date(e.endAt).toLocaleString()}` : ""}
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    {e.title || "Untitled event"}
                  </div>
                  {e.location && (
                    <div className="text-sm text-gray-600">{e.location}</div>
                  )}
                </div>
              </div>
              {e.description && (
                <p className="mt-2 text-gray-600 text-sm">{e.description}</p>
              )}
            </li>
          ))}
          {!isLoading && !error && events.length === 0 && (
            <li className="p-4 text-gray-500">No events yet. Add items to the `events` namespace in InstantDB.</li>
          )}
        </ul>
      </div>
    </main>
  );
}
