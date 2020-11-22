import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

interface IThemeInterface {
  blueColor: string;
  greyColor: string;
}

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>;

export { css, keyframes, ThemeProvider };
export default styled;