import * as Sentry from "@sentry/nextjs";

Sentry.init({
    dsn: "https://9f648b03dce8111cf797d37796304e92@o4509383901773824.ingest.us.sentry.io/4509383911276544",

    integrations: [
        Sentry.replayIntegration(),
    ],
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});