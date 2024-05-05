import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import TabPanel from "../../TabPanel";
import Link from "@material-ui/core/Link";
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import SGImage from "../../../resources/sg.jpg";
import {Accordion, AccordionDetails, AccordionSummary} from "./Gyms";
import TSO from "../../../resources/tso.jpg"
import SHSM from "../../../resources/shsm.jpg"
import SUZ from "../../../resources/suz.gif"
import Stanmark from "../../../resources/stanmark.jpg"
import VasConstruct from "../../../resources/logo-vasconstruct.jpg"
import Workout from "../../../resources/workout.png"
import sg2 from "../../../resources/sgGallery/2.jpg";
import sg3 from "../../../resources/sgGallery/3.jpg";
import sg4 from "../../../resources/sgGallery/4.jpg";
import sg5 from "../../../resources/sgGallery/5.jpg";
import sg6 from "../../../resources/sgGallery/6.jpg";
import sg7 from "../../../resources/sgGallery/7.jpg";
import sg8 from "../../../resources/sgGallery/8.jpg";
import sg9 from "../../../resources/sgGallery/9.jpg";
import sg10 from "../../../resources/sgGallery/10.jpg";
import Gallery from "../../Gallery";
import {getText} from "../../../tools/translations";

let siliconGymViews = ["http://kamery-nahled.sh.cvut.cz/fit2-stred.jpg", "http://kamery-nahled.sh.cvut.cz/fit2-drepy.jpg", "http://kamery-nahled.sh.cvut.cz/fit2-scott.jpg"]

export default function SiliconGym({isCzech}) {
    const classes = useStyles();
    const [tabIndex, setTabIndex] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const [timestamp, setTimestamp] = useState(Date.now);

    function handleTabChange(index) {
        setTabIndex(index);
        setExpanded(true);
    }

    useEffect(() => {
        let interval = setInterval(() => setTimestamp(Date.now), 7000)
        return () => clearInterval(interval)
    })

    return (
        <Accordion expanded={expanded} className={classes.root}>
            <AccordionSummary className={classes.summary} onClick={() => setExpanded(!expanded)}>
                <FormControlLabel
                    onClick={(event) => event.stopPropagation()}
                    onFocus={(event) => event.stopPropagation()}
                    control={
                        <div className={classes.gymLabel}>
                            <Typography variant='h4' className={classes.heading} gutterBottom>
                                Silicon gym
                            </Typography>
                            <div className={classes.chips}>
                                <Chip label={getText('desc', isCzech)} variant="outlined" className={classes.chip}
                                      clickable={false} onClick={() => handleTabChange(0)}
                                />
                                <Chip label={getText('virtualTour', isCzech)} variant="outlined"
                                      className={classes.chip}
                                      clickable={false} onClick={() => handleTabChange(1)}
                                />
                                <Chip label={getText('gal', isCzech)} variant="outlined" className={classes.chip}
                                      clickable={false} onClick={() => handleTabChange(2)}
                                />
                                <Chip label={getText('view', isCzech)} variant="outlined" className={classes.chip}
                                      clickable={false} onClick={() => handleTabChange(3)}
                                />
                                <Chip label={getText('partners', isCzech)} variant="outlined" className={classes.chip}
                                      clickable={false} onClick={() => handleTabChange(4)}
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
                        {getText('sgHours', isCzech)}<br/><br/>
                        {getText('sgDesc', isCzech)}
                        <Link href="https://www.facebook.com/groups/236869869671322" target="_blank" color='inherit'
                              className={classes.link}>
                            FB
                        </Link>.
                        <br/><br/>
                        {getText('sgDesc2', isCzech)}
                        <br/><br/>
                        {getText('sgDesc3', isCzech)}
                        <br/><br/>
                        {getText('moreInfo', isCzech)}
                        <Link href="https://wiki.sh.cvut.cz/klub:sport" target="_blank" color='inherit'
                              className={classes.link}>
                            {getText('wiki', isCzech)}
                        </Link>.
                    </Typography>
                </TabPanel>
                <TabPanel index={tabIndex} value={1} className={classes.article}>
                    <iframe width="100%" height="800" frameBorder="0" allowFullScreen
                            src="https://tourmkr.com/F14CGBvBio" referrerPolicy="no-referrer">

                    </iframe>
                </TabPanel>
                <TabPanel index={tabIndex} value={2} className={classes.article}>
                    <Gallery images={[
                        {src: sg2, info: getText('imgSG2', isCzech)},
                        {src: sg3, info: getText('imgSG3', isCzech)},
                        {src: sg4, info: getText('imgSG4', isCzech)},
                        {src: sg5, info: getText('imgSG5', isCzech)},
                        {src: sg6, info: getText('imgSG6', isCzech)},
                        {src: sg7, info: getText('imgSG7', isCzech)},
                        {src: sg8, info: getText('imgSG8', isCzech)},
                        {src: sg9, info: getText('imgSG9', isCzech)},
                        {src: sg10, info: getText('imgSG10', isCzech)}
                    ]}/>
                </TabPanel>
                <TabPanel index={tabIndex} value={2} className={classes.article}>
                    <div className={classes.cameras}>
                        <img className={classes.camera}
                             src={new URL(siliconGymViews[0]).toString() + "?timestamp=" + timestamp}
                             alt={getText('sgView1', isCzech)}/>
                        <img className={classes.camera}
                             src={new URL(siliconGymViews[1]).toString() + "?timestamp=" + timestamp}
                             alt={getText('sgView2', isCzech)}/>
                        <img className={classes.camera}
                             src={new URL(siliconGymViews[2]).toString() + "?timestamp=" + timestamp}
                             alt={getText('sgView3', isCzech)}/>
                    </div>
                </TabPanel>
                <TabPanel index={tabIndex} value={3} className={classes.article}>
                    <div className={classes.partners}>
                        <img className={classes.partnersLogo} src={SUZ} alt={getText('suz', isCzech)}
                             onClick={() => window.open('https://www.suz.cvut.cz', '_blank')}/>
                        <img className={classes.partnersLogo} src={TSO} alt={getText('tso', isCzech)}
                             onClick={() => window.open('https://skolatreneru.cz', '_blank')}/>
                        <img className={classes.partnersLogo} src={Stanmark} alt={getText('stanmark', isCzech)}
                             onClick={() => window.open('https://posilovaci-stroje.org', '_blank')}/>
                        <img className={classes.partnersLogo} src={VasConstruct} alt={getText('vasConstruct', isCzech)}
                             onClick={() => window.open('https://vas-construct.cz', '_blank')}/>
                        <img className={classes.partnersLogo} src={Workout} alt={getText('workout', isCzech)}
                             onClick={() => window.open('https://www.workout.eu', '_blank')}/>
                        <img className={classes.partnersLogo} src={SHSM} alt={getText('shsm', isCzech)}
                             onClick={() => window.open('https://www.facebook.com/siliconhillstrongestman', '_blank')}/>
                    </div>
                </TabPanel>
            </AccordionDetails>
        </Accordion>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        borderTop: '20px solid',
        borderTopColor: theme.palette.primary.contrastText,
    },
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
    article: {
        textAlign: 'left',
        backgroundColor: theme.palette.primary.contrastText,
        color: theme.palette.primary.main,
    },
    link: {
        fontWeight: 'bold',
        paddingLeft: theme.spacing(0.5),
    },
    gymLabel: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    chips: {
        flex: 1,
        flexWrap: 'wrap',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
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
    cameras: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    camera: {
        maxWidth: '32%',
        margin: '1%',
        borderRadius: 10,
        [theme.breakpoints.down('sm')]: {
            maxWidth: '50%',
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '80%',
        },
        boxShadow: '0px 5px 6px -3px rgba(63,81,181,0.4), ' +
            '0px 9px 12px 1px rgba(63,81,181,0.28), ' +
            '0px 3px 16px 2px rgba(63,81,181,0.46)',
        mozBoxShadow: '0px 5px 6px -3px rgba(63,81,181,0.4), ' +
            '0px 9px 12px 1px rgba(63,81,181,0.28), ' +
            '0px 3px 16px 2px rgba(63,81,181,0.46)',
        webkitBoxShadow: '0px 5px 6px -3px rgba(63,81,181,0.4), ' +
            '0px 9px 12px 1px rgba(63,81,181,0.28), ' +
            '0px 3px 16px 2px rgba(63,81,181,0.46)',
    },
    partners: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
        backgroundColor: 'white',
        width: '100%',
        flexWrap: 'wrap',
    },
    partnersLogo: {
        maxWidth: 150,
        margin: '1%',
        cursor: 'pointer',
    },
    description: {
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
        [theme.breakpoints.down('xs')]: {
            marginLeft: theme.spacing(1.5),
        },
    }
}));