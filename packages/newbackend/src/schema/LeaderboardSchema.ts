import { z } from "zod";

const LeaderBoardUser = z.object({
    username: z.string(),
    userId: z.string(),
    duration: z.string(),
    rank: z.string(),
})

export const LeaderBoardSchema = z.array(LeaderBoardUser);