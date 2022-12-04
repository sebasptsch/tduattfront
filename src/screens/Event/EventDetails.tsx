import { EventResponseType } from "@/generated";
import {
  Box,
  Divider,
  Heading,
  Stack,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tag,
  Text,
} from "@chakra-ui/react";
import { DateTime, Duration } from "luxon";

interface EventDetailsProps {
  event: EventResponseType;
}

export default function EventDetails(props: EventDetailsProps) {
  const { event } = props;
  const { hours, minutes } = Duration.fromObject({
    milliseconds:
      new Date(event.endDate).getTime() - new Date(event.startDate).getTime(),
  })
    .shiftTo("hours", "minutes")
    .toObject();
  return (
    <Stack divider={<Divider />} spacing={5} my={5}>
      <StatGroup>
        <Stat>
          <StatLabel>Start DateTime</StatLabel>
          <StatNumber>
            {DateTime.fromISO(event.startDate).toLocaleString(
              DateTime.DATETIME_MED
            )}
          </StatNumber>
        </Stat>

        <Stat>
          <StatLabel>End DateTime</StatLabel>
          <StatNumber>
            {DateTime.fromISO(event.endDate).toLocaleString(
              DateTime.DATETIME_MED
            )}
          </StatNumber>
        </Stat>
      </StatGroup>
      <StatGroup>
        <Stat>
          <StatLabel>Type</StatLabel>
          <StatNumber>
            {event?.type}{" "}
            {event?.allDay ? (
              <Tag colorScheme={"blue"} size="md">
                All Day
              </Tag>
            ) : null}
          </StatNumber>
          <StatHelpText>The type of the event.</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Duration</StatLabel>
          <StatNumber>
            {hours ?? 0}h {minutes ? Math.round(minutes) : 0}m
          </StatNumber>
          <StatHelpText>How long the event goes for.</StatHelpText>
        </Stat>
      </StatGroup>
      {/* <StatGroup>
        
      </StatGroup> */}
      <Box>
        <Heading size="md">Description</Heading>
        <Text>
          {event.description.length > 0 ? event.description : "No description"}
        </Text>
      </Box>
    </Stack>
  );
}
