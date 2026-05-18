import "styled-components";
import { type DefaultThemeType } from "./defaultTheme";

/**
 * Establishes a standard theme for all components across the frontend, including
 * standardization of colors, fonts, background styles, and layout properties for
 * different UI elements.
 *
 * @module styled-components
 */


declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends DefaultThemeType {}
}
