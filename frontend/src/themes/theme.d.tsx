import "@emotion/react";
import { type DefaultThemeType } from "./defaultTheme";

/**
 * Establishes a standard theme for all components across the frontend, including
 * standardization of colors, fonts, background styles, and layout properties for
 * different UI elements.
 *
 * @module emotion/react
 */


declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface Theme extends DefaultThemeType {}
}
