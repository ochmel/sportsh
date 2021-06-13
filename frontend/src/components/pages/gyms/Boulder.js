import React, {useState} from "react";
import {Accordion, AccordionDetails, AccordionSummary} from "./Gyms";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import TabPanel from "../../TabPanel";
import Link from "@material-ui/core/Link";
import {makeStyles} from "@material-ui/core/styles";
import SGImage from "../../../resources/boulder.jpg";
import {getText} from "../../../translations";
import Gallery from "../../Gallery";
import bo1 from "../../../resources/boulder/2.jpg";

export default function Boulder({isCzech})
{
    const classes = useStyles();
    const [tabIndex, setTabIndex] = useState(0);
    const [expanded, setExpanded] = useState(false);

    function handleTabChange(index)
    {
        setTabIndex(index);
        setExpanded(true);
    }

    return (
        <Accordion expanded={expanded}>
            <AccordionSummary className={classes.summary} onClick={() => setExpanded(!expanded)}>
                <FormControlLabel
                    onClick={(event) => event.stopPropagation()}
                    onFocus={(event) => event.stopPropagation()}
                    control={
                        <div className={classes.gymLabel}>
                            <Typography variant='h4' className={classes.heading}>
                                Boulder
                            </Typography>
                            <div>
                                <Chip label={getText('desc', isCzech)} variant="outlined" className={classes.chip}
                                      clickable={false} onClick={() => handleTabChange(0)}
                                />
                                <Chip label={getText('gal', isCzech)} variant="outlined" className={classes.chip}
                                      clickable={false} onClick={() => handleTabChange(1)}
                                />
                            </div>
                        </div>
                    }
                    label=''
                />
            </AccordionSummary>
            <AccordionDetails>
                <TabPanel value={tabIndex} index={0} className={classes.article}>
                    <Typography className={classes.description}>
                        <b>{getText('opHours', isCzech)}</b><br/>
                        {getText('boulderHours', isCzech)}<br/><br/>
                        {getText('boulderDesc', isCzech)}<br/><br/>
                        {getText('moreInfo', isCzech)}
                        <Link href="https://wiki.sh.cvut.cz/klub:sport:boulder" target="_blank" color='inherit'
                              className={classes.link}>
                            {getText('wiki', isCzech)}
                        </Link>.
                    </Typography>
                </TabPanel>
                <TabPanel index={tabIndex} value={1} className={classes.article}>
                    <Gallery images={[
                        {src: bo1, info: ""},
                        {src: SGImage, info: ""}
                    ]}/>
                </TabPanel>
            </AccordionDetails>
        </Accordion>
    )
}

const useStyles = makeStyles((theme) => ({
    heading: {
        display: 'flex',
        color: theme.palette.primary.contrastText,
        fontWeight: 'bold',
    },
    summary: {
        height: 200,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${SGImage})`,
        backgroundColor: theme.palette.primary.main,
        backgroundBlendMode: 'overlay',
    },
    view: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.contrastText,
        color: theme.palette.primary.main,
    },
    article: {
        textAlign: 'left',
        backgroundColor: theme.palette.primary.contrastText,
        color: theme.palette.primary.main,
    },
    link: {
        fontWeight: 'bold',
        marginLeft: theme.spacing(1),
    },
    chip: {
        backgroundColor: 'white',
        cursor: 'pointer',
        '&:hover': {
            fontWeight: 'bold',
            border: '2px solid black',
        },
        marginRight: theme.spacing(1),
    },
    gymLabel: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    camera: {
        maxWidth: '40%',
        borderRadius: 10,
    },
    description: {
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
        [theme.breakpoints.down('xs')]: {
            marginLeft: theme.spacing(1.5),
        },
    }
}));