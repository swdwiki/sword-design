import { makeInstaller } from "@swd-design/utils";
import components from './components'

const installer = makeInstaller(components);

export * from '@swd-design/components';
export default installer;