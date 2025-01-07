import { EventWithSecretSchema } from "./EventWithSecretSchema";

export const EventSchema = EventWithSecretSchema.omit({
	secret: true,
});

export default EventSchema;
