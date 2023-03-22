import { KafkaMessage } from "kafkajs";
import { Consumer } from "@codrjs/kafka";
import type { Config } from "@codrjs/models";

import dotenv from "dotenv";
dotenv.config();

const Topic = "codr.private.workflow.core.config.publish";
const TopicGroup = process.env.KAFKA_CONSUMER_GROUP as string;

type Payload = Config.Project;

// @ts-ignore
const processor = function (payload: Payload, message: KafkaMessage) {
  // do stuff here
  // switch(payload.action) 
  // {
  //   case "CREATE":
  //     Config
  // }
};

const PublishProjectConfigConsumer = new Consumer<Payload>({
  processor,
  groupId: TopicGroup,
  topics: [Topic],
});

export default PublishProjectConfigConsumer;
