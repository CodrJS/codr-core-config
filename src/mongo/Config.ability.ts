import { types, User } from "@codrjs/models";
import { ConfigDocument } from "./Config";

const permissions: types.Permissions<ConfigDocument, "Config"> = {
  "codr:admin": (user, { can }) => {
    can("manage", "Config");
  },
  "codr:researcher": (user, { can }) => {
    can("read", "Config");
    can("create", "Config");
    can("update", "Config", { creator: user._id });
    can("delete", "Config", { creator: user._id });
  },
  "codr:annotator": (user, { can }) => {
    can("read", "Config", { members: user._id });
  },
};

const ConfigAbility = (user: User.IUser) =>
  types.DefineAbility(user, permissions);
export default ConfigAbility;
