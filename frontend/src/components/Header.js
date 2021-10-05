import React, {useState} from 'react';
import '../App.css';
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {scrollToLink} from "../functions";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import {isWidthDown, withWidth} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import cz from "../resources/cz.png";
import en from "../resources/en.png";
import {getText} from "../translations";

function Header({width, toggleLanguage, isCzech}) {
    const classes = useStyles();
    const [menuOpen, setMenuOpen] = useState(false);

    function menuButtonClick(section) {
        window.history.pushState({}, "Silicon Hill Sport", window.location.origin + "/" + section)
        scrollToLink(section);
        setMenuOpen(false);
    }

    function getButtons() {
        return [
            <Button key={0} color="inherit" onClick={() => menuButtonClick('news')} className={classes.button}>
                {getText('news', isCzech)}
            </Button>,
            <Button key={1} color="inherit" onClick={() => menuButtonClick('gyms')} className={classes.button}>
                Sport
            </Button>,
            <Button key={2} color="inherit" onClick={() => menuButtonClick('contacts')} className={classes.button}>
                {getText('contacts', isCzech)}
            </Button>,
            <Button key={3} color="inherit" href="https://reservations.siliconhill.cz" target="_blank"
                    className={classes.button}>
                {getText('resSystem', isCzech)}
            </Button>,
            <Button key={4} color="inherit" href="https://wiki.sh.cvut.cz/klub:sport" target="_blank"
                    className={classes.button}>
                {getText('Wiki', isCzech)}
            </Button>
        ]
    }

    return (
        <ClickAwayListener onClickAway={() => setMenuOpen(false)}>
            <AppBar position="fixed">
                <Toolbar variant="dense" className={classes.toolbar}>
                    <div className={classes.leftSide}>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.heading}
                                    onClick={() => window.open('https://sport.siliconhill.cz/', '_self')}>
                            Sport SH
                        </Typography>
                    </div>
                    <div className={classes.rightSide}>
                        {isWidthDown('sm', width)
                            ?
                            <Drawer className={classes.wideButtons} anchor={'top'} open={menuOpen} variant='persistent'
                                    onClose={() => setMenuOpen(false)} PaperProps={{className: classes.paper}}
                            >
                                {getButtons()}
                            </Drawer>
                            :
                            <div className={classes.buttons}>
                                {getButtons()}
                            </div>}
                        <div className={classes.languages}>
                            <img src={cz} className={isCzech ? classes.selectedLanguage : classes.language}
                                 alt={getText('czFlag', isCzech)} onClick={toggleLanguage}/>
                            /
                            <img src={en} className={!isCzech ? classes.selectedLanguage : classes.language}
                                 alt={getText('enFlag', isCzech)} onClick={toggleLanguage}/>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </ClickAwayListener>
    );
}

export default withWidth()(Header);

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    leftSide: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    heading: {
        cursor: 'pointer',
        fontWeight: 'bold'
    },
    menuButton: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
    },
    button: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.contrastText,
        },
        fontWeight: 'bold'
    },
    wideButtons: {
        display: 'flex',
        flexDirection: 'column',
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
    },
    paper: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
    },
    languages: {
        marginLeft: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
    },
    language: {
        zoom: 0.5,
        cursor: 'pointer',
        '&:hover': {
            zoom: 1,
        },
    },
    selectedLanguage: {
        zoom: 0.8,
        cursor: 'pointer',
        '&:hover': {
            zoom: 1,
        },
    },
    rightSide: {
        display: 'flex',
    },
}));