import DeleteEventButton from "@/features/events/components/DeleteEventButton";
import RsvpList from "@/features/events/components/RSVPList";
import { eventQueryOptions } from "@/queries/events.queries";
import { Container, Grid, Paper, Typography, styled } from "@mui/material";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { DateTime } from "luxon";

export const Route = createFileRoute("/_authenticated/events_/$eventId/")({
	component: Component,
	loader: async ({ context: { queryClient }, params: { eventId } }) => {
		const [eventData] = await Promise.all([
			await queryClient.ensureQueryData(
				eventQueryOptions.eventDetails(eventId),
			),
			await queryClient.prefetchQuery(eventQueryOptions.eventRsvps(eventId)),
			await queryClient.prefetchQuery(eventQueryOptions.eventRsvp(eventId)),
		]);

		return { eventData };
	},
	head: (ctx) => ({
		meta: ctx.loaderData
			? [{ title: `${ctx.loaderData.eventData.title} - Details` }]
			: undefined,
	}),
});

const StyledContainer = styled(Container)({
	my: 2,
	flex: 1,
	overflowY: "auto",
	display: "flex",
	gap: 2,
	flexDirection: "column",
});

function Component() {
	const { eventId } = Route.useParams();
	return (
		<StyledContainer>
			<EventData eventId={eventId} />
			<DeleteEventButton eventId={eventId} />
			<RsvpList eventId={eventId} />
		</StyledContainer>
	);
}

interface EventDataProps {
	eventId: string;
}

function EventData(props: EventDataProps) {
	const { eventId } = props;

	const eventQuery = useSuspenseQuery(eventQueryOptions.eventDetails(eventId));

	return (
		<Grid container spacing={2} py={2}>
			{eventQuery.data.description ? (
				<Grid item xs={12}>
					<Paper sx={{ p: 2 }}>
						<Typography variant="h5" textAlign={"center"}>
							Description
						</Typography>
						<Typography variant="body1">
							{eventQuery.data.description}
						</Typography>
					</Paper>
				</Grid>
			) : null}
			<Grid item xs={12} md={5}>
				<Paper sx={{ p: 2, textAlign: "center" }}>
					<Typography variant="h5">Start</Typography>
					<Typography variant="body1">
						{DateTime.fromMillis(
							Date.parse(eventQuery.data.startDate),
						).toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)}
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={12} md={2}>
				<Paper sx={{ p: 2, textAlign: "center" }}>
					<Typography variant="h5">Duration</Typography>
					<Typography variant="body1">
						{DateTime.fromMillis(Date.parse(eventQuery.data.endDate))
							.diff(
								DateTime.fromMillis(Date.parse(eventQuery.data.startDate)),
								["hours", "minutes"],
							)
							.toFormat("hh:mm")}
					</Typography>
				</Paper>
			</Grid>
			<Grid xs={12} md={5} item>
				<Paper sx={{ p: 2, textAlign: "center" }}>
					<Typography variant="h5">End</Typography>
					<Typography variant="body1">
						{DateTime.fromMillis(
							Date.parse(eventQuery.data.endDate),
						).toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)}
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Paper sx={{ p: 2, textAlign: "center" }}>
					<Typography variant="h5">Type</Typography>
					<Typography variant="body1">{eventQuery.data.type}</Typography>
				</Paper>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Paper sx={{ p: 2, textAlign: "center" }}>
					<Typography variant="h5">All Day</Typography>
					<Typography variant="body1">
						{eventQuery.data.allDay ? "Yes" : "No"}
					</Typography>
				</Paper>
			</Grid>
		</Grid>
	);
}
