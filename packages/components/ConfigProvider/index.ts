import ConfigProvider from "./ConfigProvider.vue";
import {withInstall} from '@swd-design/utils'

export const SwdConfigProvider = withInstall(ConfigProvider)

export * from './types'
export * from './hooks'