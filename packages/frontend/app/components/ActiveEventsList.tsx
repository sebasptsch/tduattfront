import { List, Typography } from "@mui/material";
import PendingEventListItem from "./PendingEventListItem";
import { usersQueryOptions } from "@/queries/users.queries";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function ActiveEventsList() {
	const pendingEventsQuery = useSuspenseQuery(
		usersQueryOptions.userSelfPendingRsvps(),
	);

	if (pendingEventsQuery.data.length === 0)
		return <Typography textAlign={"center"}>No pending events</Typography>;

	return (
		<List>
			{pendingEventsQuery.data.map((rsvp) => (
				<PendingEventListItem rsvp={rsvp} key={rsvp.id} />
			))}
		</List>
	);
}
