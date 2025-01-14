import { LoadingButton } from "@mui/lab";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { type RSVPSchema, RSVPStatusSchema } from "@/server/schema";
import { DateTime } from "luxon";
import { Controller } from "react-hook-form";
import { FaRecycle } from "react-icons/fa6";
import { z } from "zod";
import useZodForm from "../../../hooks/useZodForm";
import useUpdateUserRsvp from "../hooks/useUpdateUserRsvp";
import { parseDate } from "@/utils/date";

interface RSVPEditDialogProps {
	onOpen: () => void;
	onClose: () => void;
	open: boolean;
	rsvp: z.infer<typeof RSVPSchema>;
}

const UpdateRsvpSchema = z
	.object({
		status: RSVPStatusSchema.optional(),
		checkinTime: z.string().nullable().optional(),
		checkoutTime: z.string().nullable().optional(),
	})
	.superRefine((data, ctx) => {
		if (data.checkinTime && data.checkoutTime) {
			if (
				DateTime.fromISO(data.checkinTime) > DateTime.fromISO(data.checkoutTime)
			) {
				ctx.addIssue({
					code: "custom",
					path: ["checkinTime"],
					message: "Checkin time must be before checkout time",
				});
			}
		}
	});

export default function RSVPEditDialog(props: RSVPEditDialogProps) {
	const { onClose, open, rsvp } = props;

	const {
		handleSubmit,
		control,
		formState: { isSubmitting, errors },
		reset,
	} = useZodForm({
		schema: UpdateRsvpSchema,
		defaultValues: {
			status: rsvp.status ?? undefined,
			checkinTime: parseDate(rsvp.checkinTime) ?? undefined,
			checkoutTime: parseDate(rsvp.checkoutTime) ?? undefined,
		},
	});

	const updateUserRsvpMutation = useUpdateUserRsvp();

	const onSubmit = handleSubmit(async (data) => {
		try {
			await updateUserRsvpMutation.mutateAsync({
				data: {
					eventId: rsvp.eventId,
					userId: rsvp.userId,
					checkinTime: data.checkinTime ?? undefined,
					checkoutTime: data.checkoutTime ?? undefined,
				},
			});
			onClose();
		} catch (error) {
			console.error(error);
		}
	});

	return (
		<Dialog
			open={open}
			onClose={onClose}
			component={"form"}
			onSubmit={onSubmit}
		>
			<DialogTitle>Edit RSVP Time</DialogTitle>
			<DialogContent>
				<DialogContentText>Edit an RSVP.</DialogContentText>
				<Stack gap={2} mt={2}>
					<Stack direction="row" gap={2}>
						<Controller
							control={control}
							name="checkinTime"
							render={({ field: { value, onChange, ...rest } }) => (
								<DateTimePicker
									value={value ? DateTime.fromISO(value) : null}
									label="Checkin Time"
									onChange={(date) => {
										onChange(date?.toISO());
									}}
									{...rest}
								/>
							)}
						/>
						<IconButton
							onClick={() => {
								reset({
									checkinTime: null,
								});
							}}
						>
							<FaRecycle />
						</IconButton>
					</Stack>

					<Stack direction="row" gap={2}>
						<Controller
							control={control}
							name="checkoutTime"
							render={({ field: { value, onChange, ...rest } }) => (
								<DateTimePicker
									value={value ? DateTime.fromISO(value) : null}
									label="Checkout Time"
									onChange={(date) => {
										onChange(date?.toISO());
									}}
									{...rest}
								/>
							)}
						/>
						<IconButton
							onClick={() => {
								reset({
									checkoutTime: null,
								});
							}}
						>
							<FaRecycle />
						</IconButton>
					</Stack>
					<Typography>
						{errors.checkinTime?.message}
						{errors.checkoutTime?.message}
					</Typography>
				</Stack>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>Cancel</Button>
				<LoadingButton type="submit" disabled={isSubmitting}>
					Save
				</LoadingButton>
			</DialogActions>
		</Dialog>
	);
}
