import Message from "./methods";
import { withInstallFunction } from "@swd-design/utils";

export const SwdMessage = withInstallFunction(Message, "$message");

export * from "./types";
