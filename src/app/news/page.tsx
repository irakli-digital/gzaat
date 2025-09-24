"use client";

import { db } from "../../lib/instant";

export default function NewsPage() {
  const { isLoading, error, data } = db.useQuery({ news: {} });
  const posts = ((data as any)?.news as any[]) || [];

  return (
    <main className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">News</h1>
        {isLoading && <div className="text-gray-500">Loading news…</div>}
        {error && (
          <div className="text-red-600">Failed to load news: {error.message}</div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(posts.length ? posts : []).map((n: any, idx: number) => (
            <article key={n.id || idx} className="border border-gray-200 rounded-lg p-6 bg-white">
              <div className="text-xs text-gray-400 mb-2">
                {n.date ? new Date(n.date).toLocaleDateString() : ""}
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{n.title || "Untitled"}</h2>
              <p className="text-gray-600 text-sm">{n.summary || n.excerpt || ""}</p>
            </article>
          ))}
          {!isLoading && !error && posts.length === 0 && (
            <div className="text-gray-500">No news yet. Add items to the `news` namespace in InstantDB.</div>
          )}
        </div>
      </div>
    </main>
  );
}
