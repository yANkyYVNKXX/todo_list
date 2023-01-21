import {Accordion, AccordionDetails, AccordionSummary, Grid, Typography} from '@mui/material';
import {memo, ReactNode} from 'react';

import {GridBorderLeft} from 'presentation/components/grid_border_left';
import {palette} from 'presentation/config/pallete';
import {Styles} from 'presentation/types/styles.type';

import {ReactComponent as ExpandedIcon} from 'assets/images/icons/expandedIcon.svg';

type Props = {
  children: ReactNode;
  title: string;
};

const TodoAccordionComponent = ({children, title}: Props) => {
  return (
    <Accordion sx={styles.accordion}>
      <AccordionSummary sx={styles.accordionSummary} aria-controls="panel1a-content" id="panel1a-header">
        <Grid container justifyContent="space-between" alignItems="center">
          <GridBorderLeft item xs={9} overflow="hidden" borderColor={palette.background?.grey!}>
            <Typography variant="primary" sx={styles.accordionDetailsTypography}>
              {title}
            </Typography>
          </GridBorderLeft>
          <ExpandedIcon className="qwe" />
        </Grid>
      </AccordionSummary>
      <AccordionDetails sx={styles.accordionDetails}>{children}</AccordionDetails>
    </Accordion>
  );
};

const styles: Styles = {
  accordion: {
    '&.Mui-expanded .MuiAccordionSummary-content svg': {
      transform: 'rotate(180deg)',
      height: '32px!important',
    },
    border: 'none',
    boxShadow: '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
    borderRadius: '25px!important',
    backgroundColor: palette.background?.secondary,
  },
  accordionSummary: {
    paddingY: '7px',
    width: '100%',
  },
  accordionDetailsTypography: {
    display: 'block',
    paddingY: '7px',
    marginLeft: '14px',
  },
  accordionDetails: {
    '&:first-child': {
      paddingTop: '0px',
    },
    paddingX: '17px',
    paddingY: '16px',
  },
};

export const TodoAccordion = memo(TodoAccordionComponent);
