import AsChildLink from "@/components/AsChildLink";
import DefaultAppBar from "@/components/DefaultAppBar";
import InfiniteList from "@/components/InfiniteList";
import UpcomingEventListItem from "@/features/events/components/UpcomingEventListItem";
import { authQueryOptions } from "@/queries/auth.queries";
import { eventQueryOptions } from "@/queries/events.queries";
import {
	Box,
	Button,
	Container,
	FormControl,
	InputLabel,
	ListItemButton,
	MenuItem,
	Select,
	type SelectChangeEvent,
	Stack,
	Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import {
	useSuspenseInfiniteQuery,
	useSuspenseQuery,
} from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { EventTypeSchema } from "@/server/schema";
import { DateTime } from "luxon";
import { z } from "zod";
import { fallback } from "@tanstack/zod-adapter";
import { useCallback } from "react";

const defaultTo = DateTime.now().plus({ month: 1 }).toISODate();
const defaultFrom = DateTime.now().toISODate();
const defaultLimit = 5;

const eventsSearchSchema = z.object({
	from: fallback(z.string().date(), defaultFrom).default(defaultFrom),
	to: fallback(z.string().date(), defaultTo).default(defaultTo),
	type: fallback(EventTypeSchema.optional(), undefined),
	limit: fallback(z.number().optional(), defaultLimit).default(defaultLimit),
});

export const Route = createFileRoute("/_authenticated/events")({
	component: Component,
	validateSearch: eventsSearchSchema,
	loaderDeps: ({ search }) => search,
	head: () => ({
		meta: [{ title: "Events" }],
	}),
	loader: async ({
		context: { queryClient },
		deps: { from = defaultFrom, to = defaultTo, type, limit = defaultLimit },
	}) => {
		await queryClient.prefetchQuery(authQueryOptions.status());

		await queryClient.prefetchInfiniteQuery(
			eventQueryOptions.eventList({
				from,
				to,
				type,
				limit,
			}),
		);
	},
});

function Component() {
	const { from, to, type, limit } = Route.useSearch();

	const navigate = Route.useNavigate();

	const infiniteEventsQuery = useSuspenseInfiniteQuery(
		eventQueryOptions.eventList({
			from,
			to,
			type,
			limit,
		}),
	);

	const handleTypeChange = useCallback(
		(event: SelectChangeEvent) => {
			navigate({
				search: (prev) => ({
					...prev,
					type: event.target.value as
						| z.infer<typeof EventTypeSchema>
						| undefined,
				}),
			});
		},
		[navigate],
	);

	const handleStartChange = useCallback(
		(date: DateTime<true> | DateTime<false> | null) => {
			const iso = date?.toISODate();
			navigate({
				search: (prev) => ({ ...prev, from: iso ? iso : defaultFrom }),
			});
		},
		[navigate],
	);

	const handleEndChange = useCallback(
		(date: DateTime<true> | DateTime<false> | null) => {
			const iso = date?.toISODate();
			navigate({
				search: (prev) => ({ ...prev, to: iso ? iso : defaultTo }),
			});
		},
		[navigate],
	);

	return (
		<>
			<DefaultAppBar title="Events" />
			<Container
				sx={{
					my: 2,
					flex: 1,
					overflowY: "auto",
					display: "flex",
				}}
			>
				<Stack
					gap={2}
					height={"100%"}
					display={"flex"}
					flexDirection={"column"}
					width={"100%"}
				>
					<Box
						sx={{
							display: "flex",
							alignContent: "center",
							justifyContent: "space-between",
						}}
					>
						<Typography
							variant="h4"
							sx={{
								flexGrow: 1,
							}}
						>
							Upcoming Events
						</Typography>
						<FormControl
							sx={{
								minWidth: 120,
							}}
						>
							<InputLabel id="select-event-type-label">Type</InputLabel>
							<Select
								labelId="select-event-type-label"
								id="select-event-type"
								value={type ?? ""}
								onChange={handleTypeChange}
								label="Type"
							>
								<MenuItem value={undefined}>All</MenuItem>
								<MenuItem value={"Outreach"}>Outreach</MenuItem>
								<MenuItem value={"Regular"}>Regular</MenuItem>
								<MenuItem value={"Social"}>Social</MenuItem>
								<MenuItem value={"Mentor"}>Mentor</MenuItem>
							</Select>
						</FormControl>
					</Box>
					<Box sx={{ display: "flex", justifyContent: "space-between" }}>
						<DatePicker
							value={DateTime.fromISO(from ?? defaultFrom)}
							label="From"
							onChange={handleStartChange}
						/>
						<DatePicker
							value={DateTime.fromISO(to ?? defaultTo)}
							label="To"
							onChange={handleEndChange}
						/>
					</Box>
					<InfiniteList
						data={infiniteEventsQuery.data}
						fetchNextPage={infiniteEventsQuery.fetchNextPage}
						isFetching={infiniteEventsQuery.isFetching}
						renderRow={({ row, style, ref, index }) => (
							<AsChildLink
								key={index}
								to={"/events/$eventId"}
								params={{
									eventId: row.id,
								}}
							>
								<ListItemButton style={style} ref={ref} data-index={index}>
									<UpcomingEventListItem event={row} />
								</ListItemButton>
							</AsChildLink>
						)}
						fixedHeight={72}
						sx={{
							flex: 1,
							overflowY: "auto",
						}}
					/>
					<CreateEventButton />
				</Stack>
			</Container>
		</>
	);
}

function CreateEventButton() {
	const authStatusQuery = useSuspenseQuery(authQueryOptions.status());

	return authStatusQuery.data.isAdmin ? (
		<AsChildLink to="/events/create">
			<Button variant="contained">Create Event</Button>
		</AsChildLink>
	) : null;
}
