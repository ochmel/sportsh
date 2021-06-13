import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import Link from "@material-ui/core/Link";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

export default function Footer()
{
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <div>
                <Typography variant='h6' className={classes.footerHeading}>
                    Silicon Hill Sport
                    <FacebookIcon className={classes.fb} style={{color: '#FFFFFF'}}
                                  onClick={() => window.open('https://www.facebook.com/siliconhillsport/', '_blank')}/>
                </Typography>
                <Typography variant='subtitle1'>
                    <Link href="mailto:fitcentrum@siliconhill.cz" target="_blank" color='inherit'
                          className={classes.link}>fitcentrum@siliconhill.cz</Link>
                </Typography>
            </div>
            <div className={classes.signature}>
                <Typography variant='subtitle1'>
                    © 2020 Designed by
                </Typography>
                <Typography variant='subtitle1'>
                    Dávid Michal Bulko
                </Typography>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    footer: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '4vh',
        paddingLeft: '2vw',
        paddingRight: '2vw',
        textAlign: 'left',
        [theme.breakpoints.down(400)]: {
            flexDirection: 'column',
        }
    },
    footerHeading: {
        display: 'flex',
        alignItems: 'center',
    },
    fb: {
        cursor: 'pointer',
        paddingLeft: theme.spacing(0.5),
    },
    link: {
        fontWeight: 'bold',
    },
    signature: {
        [theme.breakpoints.down(400)]: {
            alignSelf: 'flex-start',
            textAlign: 'left',
            paddingTop: theme.spacing(2),
        },
        alignSelf: 'flex-end',
        paddingBottom: theme.spacing(1),
        textAlign: 'right',
    },
}))