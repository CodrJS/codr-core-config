import { Producer } from "@codrjs/kafka";
import type { Config } from "@codrjs/models";

const Topic = "codr.core.state.config";
const ConfigStateProducer = new Producer<Config.Base<any>>(Topic);

export default ConfigStateProducer;
