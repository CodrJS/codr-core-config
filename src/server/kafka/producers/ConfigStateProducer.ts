import { Producer } from "@codrjs/kafka";
import type { Config } from "@codrjs/models";

/**
 * This topics is assumed to be consumed by audit and notification
 * domains/microservices.
 */

const Topic = "codr.state.core.config";
const ConfigStateProducer = new Producer<Config.Base<any>>(Topic);

export default ConfigStateProducer;
