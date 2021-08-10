import resolutions from 'visual/resolutions';
import colors from 'visual/colors';
import theme from 'visual/theme';

type Resolutions = typeof resolutions;
type Colors = typeof colors;
type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    resolutions: Resolutions;
    colors: Colors;
  }
}
