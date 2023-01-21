import {Styles} from '/presentation/types/styles.type';
import {Grid, GridProps} from '@mui/material';
import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
  borderColor: string;
} & GridProps;

export const GridBorderLeft = ({children, borderColor, ...props}: Props) => {
  return (
    <Grid
      sx={{
        position: 'relative',
        '&:before': {
          background: borderColor,
          ...(styles.borderLeft as Styles),
        },
      }}
      {...props}>
      {children}
    </Grid>
  );
};

const styles: Styles = {
  borderLeft: {
    content: '""',
    position: 'absolute',
    color: 'white',
    width: '5px',
    height: '90%',
    top: '50%',
    transform: 'translateY(-50%)',
    borderRadius: '4px',
    left: '0px',
  },
};
