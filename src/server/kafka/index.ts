import { admin } from "@codrjs/kafka";
import PublishProjectConfigConsumer from "./consumers/ProjectConfigConsumer";
import ConfigStateProducer from "./producers/ConfigStateProducer";

export const start = function start() {
  admin.connect().then(() => {
    console.log("Kafka admin has entered the chat.");
  });

  PublishProjectConfigConsumer.start();
  ConfigStateProducer.start();
};

export const stop = async function stop() {
  await PublishProjectConfigConsumer.shutdown();
  await ConfigStateProducer.shutdown();

  await admin.disconnect().then(() => {
    console.log("Kafka admin has left the chat.");
  });
};
