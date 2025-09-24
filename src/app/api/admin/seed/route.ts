import { NextResponse } from "next/server";
import { init, id } from "@instantdb/admin";

const APP_ID = process.env.NEXT_PUBLIC_INSTANT_APP_ID || "";
const ADMIN_TOKEN = process.env.INSTANT_APP_ADMIN_TOKEN || "";
const SEED_HTTP_TOKEN = process.env.SEED_HTTP_TOKEN; // optional guard

function bad(status: number, message: string) {
  return NextResponse.json({ ok: false, message }, { status });
}

export async function POST(req: Request) {
  try {
    if (!APP_ID || !ADMIN_TOKEN) {
      return bad(500, "Server missing APP_ID or ADMIN token env vars.");
    }

    if (SEED_HTTP_TOKEN) {
      const header = req.headers.get("authorization");
      const expected = `Bearer ${SEED_HTTP_TOKEN}`;
      if (header !== expected) {
        return bad(401, "Unauthorized: missing/invalid bearer token.");
      }
    }

    const db = init({ appId: APP_ID, adminToken: ADMIN_TOKEN });

    const sample = {
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
    } as const;

    const existing = await db.query({
      homepage: {},
      features: {},
      news: {},
      events: {},
    });

    const txs: any[] = [];

    // homepage upsert
    const existingHome = (existing as any)?.homepage?.[0];
    if (existingHome) {
      txs.push(db.tx.homepage[existingHome.id].update(sample.homepage));
    } else {
      txs.push(db.tx.homepage[id()].update(sample.homepage));
    }

    // features/news/events only if empty
    if (!((existing as any)?.features || []).length) {
      for (const f of sample.features) txs.push(db.tx.features[id()].update(f));
    }
    if (!((existing as any)?.news || []).length) {
      for (const n of sample.news) txs.push(db.tx.news[id()].update(n));
    }
    if (!((existing as any)?.events || []).length) {
      for (const e of sample.events) txs.push(db.tx.events[id()].update(e));
    }

    if (txs.length === 0) {
      return NextResponse.json({ ok: true, message: "Nothing to seed" });
    }

    const res = await db.transact(txs);
    return NextResponse.json({ ok: true, tx: res });
  } catch (e: any) {
    const message = e?.body?.message || e?.message || "Unknown error";
    return bad(500, message);
  }
}

