import React, {useEffect, useState} from "react";
import {Accordion, AccordionDetails, AccordionSummary} from "./Gyms";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import TabPanel from "../../TabPanel";
import Link from "@material-ui/core/Link";
import {makeStyles} from "@material-ui/core/styles";
import SummaryImage from "../../../resources/blockgyms.jpg";
import b3 from "../../../resources/blockGallery/b3.jpg";
import b32 from "../../../resources/blockGallery/b3_2.jpg";
import b4 from "../../../resources/blockGallery/b4.jpg";
import b42 from "../../../resources/blockGallery/b4_2.jpg";
import b5 from "../../../resources/blockGallery/b5.jpg";
import b52 from "../../../resources/blockGallery/b5_2.jpg";
import b6 from "../../../resources/blockGallery/b6.jpg";
import b7 from "../../../resources/blockGallery/b7.jpg";
import b8 from "../../../resources/blockGallery/b8.jpg";
import b82 from "../../../resources/blockGallery/b8_2.jpg";
import b9 from "../../../resources/blockGallery/b9.jpg";
import b10 from "../../../resources/blockGallery/b10.jpg";
import b11 from "../../../resources/blockGallery/b11.jpg";
import b112 from "../../../resources/blockGallery/b11_2.jpg";
import Gallery from "../../Gallery";
import {getText} from "../../../translations";


const cameras = ["http://kamery-nahled.sh.cvut.cz/pos3.jpg", "http://kamery-nahled.sh.cvut.cz/pos4.jpg",
    "http://kamery-nahled.sh.cvut.cz/pos5.jpg", "http://kamery-nahled.sh.cvut.cz/pos6.jpg",
    "http://kamery-nahled.sh.cvut.cz/pos7.jpg", "http://kamery-nahled.sh.cvut.cz/pos8.jpg",
    "http://kamery-nahled.sh.cvut.cz/pos9.jpg", "http://kamery-nahled.sh.cvut.cz/pos10.jpg",
    "http://kamery-nahled.sh.cvut.cz/pos11.jpg"];

export default function BlockGyms({isCzech}) {
    const classes = useStyles();
    const [tabIndex, setTabIndex] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const [gymViews, setGymViews] = useState(cameras);

    function handleTabChange(tabIndex) {
        setTabIndex(tabIndex);
        setExpanded(true);
    }

    useEffect(() => {
        let interval = setInterval(() => {
            let timestamp = Date.now();
            setGymViews([
                cameras[0] + '?timestamp=' + timestamp,
                cameras[1] + '?timestamp=' + timestamp,
                cameras[2] + '?timestamp=' + timestamp,
                cameras[3] + '?timestamp=' + timestamp,
                cameras[4] + '?timestamp=' + timestamp,
                cameras[5] + '?timestamp=' + timestamp,
                cameras[6] + '?timestamp=' + timestamp,
                cameras[7] + '?timestamp=' + timestamp,
                cameras[8] + '?timestamp=' + timestamp,
            ])
        }, 7000)
        return () => clearInterval(interval)
    })

    const cameraTextStart = getText('bGymsView', isCzech);

    return (
        <Accordion expanded={expanded}>
            <AccordionSummary className={classes.summary} onClick={() => setExpanded(!expanded)}>
                <FormControlLabel
                    onClick={(event) => event.stopPropagation()}
                    onFocus={(event) => event.stopPropagation()}
                    control={
                        <div className={classes.gymLabel}>
                            <Typography variant='h4' className={classes.heading}>
                                {getText('bGyms', isCzech)}
                            </Typography>
                            <div className={classes.chips}>
                                <Chip label={getText('desc', isCzech)} variant="outlined" className={classes.chip}
                                      clickable={false} onClick={() => handleTabChange(0)}
                                />
                                <Chip label={getText('view', isCzech)} variant="outlined" className={classes.chip}
                                      clickable={false} onClick={() => handleTabChange(1)}
                                />
                                <Chip label={getText('gal', isCzech)} variant="outlined" className={classes.chip}
                                      clickable={false} onClick={() => handleTabChange(3)}
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
                        {getText('bGymsHours', isCzech)}<br/><br/>
                        {getText('bGymsDesc', isCzech)}<br/><br/>
                        {getText('moreInfo', isCzech)}
                        <Link href="https://wiki.sh.cvut.cz/klub:sport:block_gyms" target="_blank" color='inherit'
                              className={classes.link}>
                            {getText('wiki', isCzech)}
                        </Link>.
                    </Typography>
                </TabPanel>
                <TabPanel index={tabIndex} value={1} className={classes.view}>
                    <div className={classes.cameraRow}>
                        <div className={classes.cameraContainer}>
                            <img className={classes.camera} src={gymViews[0]}
                                 alt={cameraTextStart + '3.'}/>
                            <Typography className={classes.cameraText}>{cameraTextStart + '3.'}</Typography>
                        </div>
                        <div className={classes.cameraContainer}>
                            <img className={classes.camera} src={gymViews[1]}
                                 alt={cameraTextStart + '4.'}/>
                            <Typography className={classes.cameraText}>{cameraTextStart + '4.'}</Typography>
                        </div>
                        <div className={classes.cameraContainer}>
                            <img className={classes.camera} src={gymViews[2]}
                                 alt={cameraTextStart + '5.'}/>
                            <Typography className={classes.cameraText}>{cameraTextStart + '5.'}</Typography>
                        </div>
                    </div>
                    <div className={classes.cameraRow}>
                        <div className={classes.cameraContainer}>
                            <img className={classes.camera} src={gymViews[3]}
                                 alt={cameraTextStart + '6.'}/>
                            <Typography className={classes.cameraText}>{cameraTextStart + '6.'}</Typography>
                        </div>
                        <div className={classes.cameraContainer}>
                            <img className={classes.camera} src={gymViews[4]}
                                 alt={cameraTextStart + '7.'}/>
                            <Typography className={classes.cameraText}>{cameraTextStart + '7.'}</Typography>
                        </div>
                        <div className={classes.cameraContainer}>
                            <img className={classes.camera} src={gymViews[5]}
                                 alt={cameraTextStart + '8.'}/>
                            <Typography className={classes.cameraText}>{cameraTextStart + '8.'}</Typography>
                        </div>
                    </div>
                    <div className={classes.cameraRow}>
                        <div className={classes.cameraContainer}>
                            <img className={classes.camera} src={gymViews[6]}
                                 alt={cameraTextStart + '9.'}/>
                            <Typography className={classes.cameraText}>{cameraTextStart + '9.'}</Typography>
                        </div>
                        <div className={classes.cameraContainer}>
                            <img className={classes.camera} src={gymViews[7]}
                                 alt={cameraTextStart + '10.'}/>
                            <Typography className={classes.cameraText}>{cameraTextStart + '10.'}</Typography>
                        </div>
                        <div className={classes.cameraContainer}>
                            <img className={classes.camera} src={gymViews[8]}
                                 alt={cameraTextStart + '11.'}/>
                            <Typography className={classes.cameraText}>{cameraTextStart + '11.'}</Typography>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel index={tabIndex} value={3} className={classes.article}>
                    <Gallery images={[
                        {src: b3, info: getText('imgB3', isCzech)}, {src: b32, info: getText('imgB3', isCzech)},
                        {src: b4, info: getText('imgB4', isCzech)}, {src: b42, info: getText('imgB4', isCzech)},
                        {src: b5, info: getText('imgB5', isCzech)}, {src: b52, info: getText('imgB5', isCzech)},
                        {src: b6, info: getText('imgB6', isCzech)}, {src: b7, info: getText('imgB7', isCzech)},
                        {src: b8, info: getText('imgB8', isCzech)}, {src: b82, info: getText('imgB8', isCzech)},
                        {src: b9, info: getText('imgB9', isCzech)}, {src: b10, info: getText('imgB10', isCzech)},
                        {src: b11, info: getText('imgB11', isCzech)}, {src: b112, info: getText('imgB11', isCzech)}
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
        textAlign: 'left',
    },
    summary: {
        height: 200,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${SummaryImage})`,
        backgroundColor: theme.palette.primary.main,
        backgroundBlendMode: 'overlay',
        backgroundRepeat: "no-repeat",
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
        borderBottom: '10px solid',
        borderBottomColor: theme.palette.primary.main,
    },
    link: {
        fontWeight: 'bold',
        marginLeft: theme.spacing(1),
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
    cameraRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    cameraContainer: {
        maxWidth: '30%',
        marginLeft: '2.5%',
        textAlign: 'center',
    },
    camera: {
        maxWidth: '100%',
        borderRadius: 10,
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
    cameraText: {
        margin: theme.spacing(1.5),
    },
    description: {
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
        [theme.breakpoints.down('xs')]: {
            marginLeft: theme.spacing(1.5),
        },
    }
}));