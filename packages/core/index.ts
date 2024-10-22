import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import  makeInstaller  from "./makeInstaller";
import componens from "./componens";
import printLogo from "./pringLogo";

import "@swd-design/theme/index.css";

printLogo();

library.add(fas);
const installer = makeInstaller(componens);

export * from '@swd-design/locale'
export * from "@swd-design/components";
export default installer;
