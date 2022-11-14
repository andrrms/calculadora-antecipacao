import "styled-components";

import { MyTheme } from "./styles/colors";

declare module "styled-components" {
  export interface DefaultTheme extends MyTheme {}
}
