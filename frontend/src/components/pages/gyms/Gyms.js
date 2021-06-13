import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import {withStyles} from "@material-ui/core";
import SiliconGym from "./SiliconGym";
import BlockGyms from "./BlockGyms";
import Boulder from "./Boulder";
import {getText} from "../../../translations";
import Link from "@material-ui/core/Link";

export const Accordion = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
}))(MuiAccordion);

export const AccordionSummary = withStyles({
    root: {
        paddingLeft: 0,

    },
    content: {
        paddingLeft: '8vh',
        margin: 0,
        '&$expanded': {
            margin: 0,
        },
    },
    expanded: {
        margin: 0,
    }
})(MuiAccordionSummary);

export const AccordionDetails = withStyles({
    root: {
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
    },
})(MuiAccordionDetails);

export default function Gyms({isCzech})
{
    const classes = useStyles();

    return (
        <div className={classes.gyms}>
            <Typography variant='h3' className={classes.heading}>
                Sport
            </Typography>
            {/*<Paper className={classes.paper}>*/}
            <Typography className={classes.paper}>
                {getText('mainDesc', isCzech)}
                <Link href="https://www.facebook.com/siliconhillstrongestman" target="_blank" color='inherit'
                      className={classes.link}>
                    Silicon Hill Strongest Man
                </Link>
                {getText('mainDesc2', isCzech)}
                <Link href="http://show.siliconhill.cz/" target="_blank" color='inherit' className={classes.link}>
                    SHOW Strahov
                </Link>
                {getText('mainDesc3', isCzech)}
            </Typography>
            {/*</Paper>*/}
            <SiliconGym isCzech={isCzech}/>
            <Boulder isCzech={isCzech}/>
            <BlockGyms isCzech={isCzech}/>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    gyms: {
        backgroundColor: theme.palette.primary.main,

        minHeight: '100vh',
    },
    heading: {
        display: 'flex',
        padding: '8vh 8vh 2vh 8vh',
        color: theme.palette.primary.contrastText,
        fontWeight: 'bold',
        [theme.breakpoints.down('xs')]: {
            padding: '8vh 8vh 2vh 6vh',
        }
    },
    paper: {
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(3),
        marginLeft: theme.spacing(4.5),
        marginRight: theme.spacing(4.5),
        marginBottom: '6vh',
        [theme.breakpoints.down('xs')]: {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
        }
    },
    link: {
        fontWeight: 'bold',
    }
}));