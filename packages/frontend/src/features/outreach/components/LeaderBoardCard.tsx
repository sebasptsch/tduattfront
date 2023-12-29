import { Paper, Stack, Typography } from "@mui/material";
import { createColumnHelper } from "@tanstack/react-table";
import Datatable from "../../../components/DataTable";
import { z } from "zod";
import { LeaderBoardUser as LeaderboardUserSchema } from "backend/schema";
import { trpc } from "@/trpcClient";
import { Duration } from "luxon";
import { useMemo } from "react";

type LeaderboardUser = z.infer<typeof LeaderboardUserSchema>;

const columnHelper = createColumnHelper<LeaderboardUser>();

const roundDuration = (duration: Duration) => {
  const millis = duration.toMillis();
  // round to the nearest minute
  const rounded = Math.round(millis / 60000) * 60000;
  const hours = Math.floor(rounded / 3600000);
  const minutes = Math.floor((rounded % 3600000) / 60000);
  return Duration.fromObject({ hours, minutes });
};

const columns = [
  columnHelper.accessor("rank", {
    header: "Rank",
    maxSize: 50,
  }),
  columnHelper.accessor("username", {
    header: "Username",
  }),
  columnHelper.accessor("duration", {
    header: "Outreach Hours",
    cell: (props) => {
      return roundDuration(Duration.fromISO(props.getValue())).toHuman();
    },
  }),
];

export default function LeaderboardCard() {
  const leaderboardQuery = trpc.outreach.leaderboard.useInfiniteQuery(
    {
      limit: 10,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  );

  const flatResults = useMemo(
    () => leaderboardQuery.data?.pages.flatMap((page) => page.items),
    [leaderboardQuery.data]
  );

  const totalRowCount = useMemo(
    () => leaderboardQuery.data?.pages.at(-1)?.total ?? 0,
    [leaderboardQuery.data]
  );

  if (leaderboardQuery.data) {
    return (
      <Paper sx={{ p: 2, textAlign: "center", height: "100%", width: "100%" }}>
        <Stack gap={2} sx={{ height: "100%", display: "flex" }}>
          <Typography variant="h4">Leaderboard</Typography>
          <Datatable
            columns={columns ?? []}
            data={flatResults ?? []}
            totalDBRowCount={totalRowCount}
            fetchNextPage={leaderboardQuery.fetchNextPage}
            isFetching={leaderboardQuery.isFetching}
            sx={{
              flex: 1,
            }}
            fixedHeight={53}
          />
        </Stack>
      </Paper>
    );
  }

  return (
    <Paper sx={{ p: 2, textAlign: "center" }}>
      <Typography variant="h4">Loading...</Typography>
    </Paper>
  );
}
