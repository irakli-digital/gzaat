"use client";

import { db } from "../../../lib/instant";
import { id } from "@instantdb/react";
import { useMemo, useState } from "react";

export default function SeedInstantPage() {
  const { data, isLoading, error } = db.useQuery({
    homepage: {},
    features: {},
    news: {},
    events: {},
  });

  const [status, setStatus] = useState<string>("");

  const sample = useMemo(
    () => ({
      homepage: {
        title: "Excellence in",
        accent: "Education",
        subtitle:
          "Empowering minds through innovative learning, groundbreaking research, and a commitment to academic excellence that shapes tomorrow's leaders.",
        ctaPrimary: "Apply Now",
        ctaSecondary: "Learn More",
      },
      features: [
        {
          title: "World-Class Faculty",
          description:
            "Learn from renowned professors and industry experts committed to your academic success.",
        },
        {
          title: "Innovation Hub",
          description:
            "Access cutting-edge research facilities and participate in groundbreaking discoveries.",
        },
        {
          title: "Global Community",
          description:
            "Join a diverse network of scholars from around the world, fostering lifelong connections.",
        },
      ],
      news: [
        {
          title: "Welcome to the new academic year",
          summary: "Key dates and highlights for the semester ahead.",
          date: Date.now(),
        },
        {
          title: "Robotics team places first",
          summary: "Our students took top honors at the regional competition.",
          date: Date.now() - 1000 * 60 * 60 * 24 * 7,
        },
      ],
      events: [
        {
          title: "Open House",
          startAt: Date.now() + 1000 * 60 * 60 * 24 * 14,
          endAt: Date.now() + 1000 * 60 * 60 * 24 * 14 + 1000 * 60 * 120,
          location: "Main Campus",
          description: "Tour facilities and meet faculty.",
        },
        {
          title: "Science Fair",
          startAt: Date.now() + 1000 * 60 * 60 * 24 * 30,
          location: "Auditorium",
          description: "Student projects and exhibits.",
        },
      ],
    }),
    [],
  );

  async function seed() {
    try {
      setStatus("Seeding…");

      const txs: any[] = [];

      // Upsert homepage (first record only)
      const existingHome = (data as any)?.homepage?.[0];
      if (existingHome) {
        txs.push(db.tx.homepage[existingHome.id].update(sample.homepage));
      } else {
        txs.push(db.tx.homepage[id()].update(sample.homepage));
      }

      // Only add features if none exist
      const hasFeatures = ((data as any)?.features || []).length > 0;
      if (!hasFeatures) {
        for (const f of sample.features) {
          txs.push(db.tx.features[id()].update(f));
        }
      }

      // Only add news if none exist
      const hasNews = ((data as any)?.news || []).length > 0;
      if (!hasNews) {
        for (const n of sample.news) {
          txs.push(db.tx.news[id()].update(n));
        }
      }

      // Only add events if none exist
      const hasEvents = ((data as any)?.events || []).length > 0;
      if (!hasEvents) {
        for (const e of sample.events) {
          txs.push(db.tx.events[id()].update(e));
        }
      }

      if (txs.length === 0) {
        setStatus("Nothing to do — data already present.");
        return;
      }

      await db.transact(txs);
      setStatus("Seed complete.");
    } catch (e: any) {
      setStatus(
        e?.body?.message || e?.message || "Seed failed — check permissions.",
      );
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }

  return (
    <main className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold mb-4">InstantDB Seeder</h1>
        <p className="text-sm text-gray-600 mb-4">
          This tool writes sample content (homepage, features, news, events) to
          your InstantDB app. Ensure permissions allow writes temporarily.
        </p>
        {isLoading && <div className="text-gray-500">Loading current data…</div>}
        {error && (
          <div className="text-red-600 mb-2">Query error: {error.message}</div>
        )}
        <button
          onClick={seed}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Seed Sample Content
        </button>
        {status && <div className="mt-4 text-sm text-gray-700">{status}</div>}
        <div className="mt-6 text-xs text-gray-500">
          Tip: After seeding, switch permissions back to read-only for anonymous
          users.
        </div>
      </div>
    </main>
  );
}

