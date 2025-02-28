import { syncEvents } from "@/server/services/calalendarSync.service";
import { json } from "@tanstack/react-start";
import { createAPIFileRoute } from "@tanstack/react-start/api";

export const APIRoute = createAPIFileRoute("/api/scheduler/calendar/trigger")({
  POST: async () => {
    try {
      const result = await syncEvents();

      return json(result);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";

      return json({ error: errorMessage }, { status: 500 });
    }
  },
});
