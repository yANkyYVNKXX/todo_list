import {Components} from '@mui/material';
import ActorTTF from 'fonts/Actor/Actor-Regular.ttf';

import {palette} from 'presentation/config/pallete';

export const components: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      '@font-face': {
        fontFamily: 'Actor',
        src: `url(${ActorTTF}) format('truetype')`,
      },
    },
  },
  MuiSwitch: {
    defaultProps: {
      sx: {
        width: '50px',
        height: '29px',
        padding: 0,

        '& .MuiSwitch-switchBase': {
          padding: 0,
          margin: '2px',
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(21px)',
            color: '#fff',
            background: palette.switcher.active,
            '& + .MuiSwitch-track': {
              background: palette.switcher.active,
              opacity: 1,
            },
          },
        },
        '& .MuiSwitch-thumb': {
          boxSizing: 'border-box',
          width: 25,
          height: 25,
        },
        '& .MuiSwitch-track': {
          borderRadius: 24 / 2,
          background: palette.switcher.default,
          opacity: 1,
        },
      },
    },
  },
  MuiTypography: {
    defaultProps: {
      fontFamily: 'Actor',
    },
    variants: [
      {
        props: {variant: 'h4'},
        style: {
          color: palette.text?.primary,
          fontSize: '36px',
          lineHeight: '43px',
        },
      },
      {
        props: {variant: 'primary'},
        style: {
          color: palette.text?.primary,
          fontSize: '24px',
        },
      },
      {
        props: {variant: 'secondary'},
        style: {
          fontSize: '14px',
          fontWeight: '600',
          color: palette.text?.secondary,
        },
      },
    ],
  },
  MuiCheckbox: {
    defaultProps: {
      sx: {
        padding: '0',
        background: 'transparent',
        color: 'white!important',
      },
    },
  },
};
