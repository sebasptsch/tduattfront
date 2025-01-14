import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { eventQueryKeys, usersQueryKeys } from "@/server/queryKeys";
import { createServerFn } from "@tanstack/start";
import { mentorMiddleware } from "@/middleware/authMiddleware";
import { ScaninSchema } from "@/server/schema/ScaninSchema";
import { userScanin } from "@/server/services/events.service";

const scaninFn = createServerFn({
	method: "POST",
})
	.middleware([mentorMiddleware])
	.validator(ScaninSchema)
	.handler(async ({ data }) => userScanin(data));

export default function useScanin() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: scaninFn,
		onSuccess: (data) => {
			queryClient.invalidateQueries({
				queryKey: eventQueryKeys.eventRsvp(data.eventId),
			});
			queryClient.invalidateQueries({
				queryKey: eventQueryKeys.eventRsvps(data.eventId),
			});
			queryClient.invalidateQueries({
				queryKey: usersQueryKeys.userPendingRsvps(data.userId),
			});
		},
	});
}
