import { z } from "zod";
import { t } from "../trpc";
import { tokenProcedure } from "../trpc/utils";
import { getOutreachTime } from "../services/outreach.service";
import LeaderBoardSchema from "../schema/LeaderboardSchema";

/**
 * A router than the bot uses to communicate with the backend
 */
export const botRouter = t.router({
    online: tokenProcedure.input(z.void()).output(z.literal("OK")).query(() => "OK"),
    leaderboard: tokenProcedure.input(z.void()).output(LeaderBoardSchema).query(() => getOutreachTime()),
})