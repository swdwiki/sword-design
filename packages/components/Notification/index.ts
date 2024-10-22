import Notification from "./methods";
import { withInstallFunction } from "@swd-design/utils";

export const SwdNotification = withInstallFunction(
  Notification,
  "$notify"
);

export * from "./types";
