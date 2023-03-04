import ConfigStateProducer from "@/server/kafka/producers/ConfigStateProducer";
import { Config } from "@codrjs/models";

type Types = "project";
type ConfigTypes = Config.Project["config"]; //| Config.Base<{}>["config"];

export class ConfigUtil {
  create(type: Types, config: ConfigTypes) {
    let conf: Config.Project;
    switch (type) {
      case "project":
        conf = new Config.Project({ config });
        break;
      default:
        throw new Error("Invalid config type passed to ConfigUtil.create()");
    }

    this.updateStateTopic([conf]);
    return conf;
  }

  get(id: string) {}

  update(id: string, config: ConfigTypes) {}

  delete(id: string) {}

  private updateStateTopic(messages: Config.Base<any>[]) {
    ConfigStateProducer.sendBatch(messages);
  }
}
