import type { Config as ConfigModel } from "@codrjs/models";
import type { Document, ObjectId } from "mongoose";
import { model, Schema } from "mongoose";

type Config = ConfigModel.IBaseConfig<any>;
const ConfigSchema = new Schema<Config>(
  {
    type: { type: String, required: [true, "Type cannot be blank."] },
    verison: { type: String },
    config: { type: Object, required: [true, "Config cannot be empty."] },
    createdAt: { type: String },
    updatedAt: { type: String },
  },
  {
    timestamps: true,
  }
);

export type IConfig = Config & {
  _id: ObjectId;
};

export type ConfigDocument = Config & Document;
// @ts-ignore
const Config = model<ConfigDocument>("Config", ConfigSchema);
export default Config;
