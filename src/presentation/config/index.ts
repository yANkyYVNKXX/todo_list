import {createTheme} from '@mui/material/styles';

import {components} from 'presentation/config/components.config';
import {palette} from 'presentation/config/pallete';
import 'presentation/types/mui';

export const theme = createTheme({palette, components});

declare module '@mui/material/styles' {
  interface PaletteOptions {
    switcher: Switcher;
    scroll: Scroll;
    borderColors: BorderColors;
  }
  interface TypeBackground {
    secondary: string;
    grey: string;
  }
  interface Scroll {
    track: string;
    thumb: string;
  }

  interface BorderColors {
    [key: number]: string;
  }

  interface Switcher {
    default: string;
    active: string;
  }
}
