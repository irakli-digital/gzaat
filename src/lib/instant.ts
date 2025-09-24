import { init } from "@instantdb/react";

const APP_ID = process.env.NEXT_PUBLIC_INSTANT_APP_ID;

if (!APP_ID) {
  // Make it obvious during development that configuration is missing
  // without crashing production builds.
  // eslint-disable-next-line no-console
  console.warn(
    "NEXT_PUBLIC_INSTANT_APP_ID is not set. InstantDB will not connect.",
  );
}

export const db = init({ appId: APP_ID || "" });
