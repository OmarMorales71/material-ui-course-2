import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

const ControlledAccordions = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const data = [
        {
            'id': 'panel1',
            'heading': 'Panel 1',
            'secondaryHeading': 'This is panel 1',
            'details': 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.'

        },
        {
            'id': 'panel2',
            'heading': 'Panel 2',
            'secondaryHeading': 'This is panel 2',
            'details': 'et et et et et et et et et et'

        },
        {
            'id': 'panel3',
            'heading': 'Panel 3',
            'secondaryHeading': 'This is panel 3',
            'details': 'et et et et et et et et et et'

        },
        {
            'id': 'panel4',
            'heading': 'Panel 4',
            'secondaryHeading': 'This is panel 4',
            'details': 'et et et et et et et et et et'

        }
    ]
    return (
        <div className={classes.root}>

            {data.map(accordion => {

                return (
                    <Accordion expanded={expanded === accordion.id} key={accordion.id} onChange={handleChange(accordion.id)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography className={classes.heading}>{accordion.heading}</Typography>
                            <Typography className={classes.secondaryHeading}>{accordion.secondaryHeading}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {accordion.details}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            })}

        </div>
    );
}

export default ControlledAccordions