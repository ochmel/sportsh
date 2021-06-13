import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {getPositionTranslation, getText} from "../../../translations";
import CardContent from "@material-ui/core/CardContent";
import {getPhotoUrl} from "../../../functions";

export default function ContactsGrid({isCzech, contacts})
{
    const classes = useStyles();

    function setUpContacts(contacts)
    {
        const contactsMap = {
            management: [],
            instructors: [],
            masseurs: [],
            trainers: [],
            siliconGymAdmins: [],
            blockGymsAdmins: [],
        }

        for (const contact of contacts)
        {
            if (contact.manager)
            {
                contactsMap.management.push(contact);
            }
            if (contact.instructor)
            {
                contactsMap.instructors.push(contact);
            }
            if (contact.masseur)
            {
                contactsMap.masseurs.push(contact);
            }
            if (contact.trainer)
            {
                contactsMap.trainers.push(contact);
            }
            if (contact.siliconGym)
            {
                contactsMap.siliconGymAdmins.push(contact);
            }
            if (contact.blockGym)
            {
                contactsMap.blockGymsAdmins.push(contact);
            }
        }

        return contactsMap;
    }

    function generateGrid(contactsMap)
    {
        return (
            <React.Fragment>
                {getSeparator('management')}
                {contactsMap.management.map(manager => getCard(manager, true))}
                {getSeparator('instructors')}
                {contactsMap.instructors.map(instructor => getCard(instructor))}
                {getSeparator('masseurs')}
                {contactsMap.masseurs.map(masseur => getCard(masseur))}
                {getSeparator('trainers')}
                {contactsMap.trainers.map(trainer => getCard(trainer))}
                {getSeparator('siliconGymAdmins')}
                {contactsMap.siliconGymAdmins.map(admin => getCard(admin, true))}
                {getSeparator('blockGymsAdmins')}
                {contactsMap.blockGymsAdmins.map(admin => getCard(admin, true))}
            </React.Fragment>
        )
    }

    function getSeparator(text)
    {
        return (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Card className={classes.separatorCard}>
                    <Typography variant='h4' className={classes.heading}>
                        {getText(text, isCzech)}
                    </Typography>
                </Card>
            </Grid>
        )
    }

    function getCard(contact, showFunctions)
    {
        return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <Card className={classes.card} elevation={9} classes={{root: classes.cardRoot}}>
                    <Avatar src={getPhotoUrl(contact.photoId)} className={classes.avatar}
                            alt={getText('contactPhoto', isCzech)}/>
                    <CardContent>
                        <Typography variant='subtitle2' className={classes.personText}>
                            {contact.name}
                        </Typography>
                        {showFunctions && contact.functions.map((func, i) =>
                            <Typography key={i} variant='subtitle2'>
                                {isCzech ? func : getPositionTranslation(func)}
                            </Typography>)
                        }
                        <Typography variant='subtitle2' className={classes.personEmail}>
                            {contact.email}
                        </Typography>
                        <Typography variant='subtitle2'>
                            {contact.phone}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        )
    }

    return (
        <Grid container spacing={2} className={classes.grid}>
            {!contacts
                ? <CircularProgress/>
                : generateGrid(setUpContacts(contacts))
            }
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    grid: {
        marginTop: theme.spacing(3),
        justifyContent: 'center'
    },
    separatorCard: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(2),
    },
    heading: {
        fontWeight: 'bold',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        paddingTop: theme.spacing(2),
        color: theme.palette.primary.main,
        height: '95%',
    },
    cardRoot: {
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
    avatar: {
        alignSelf: 'center',
        width: '18vw',
        height: '18vw',
        border: '1px solid',
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.down('md')]: {
            width: '25vw',
            height: '25vw',
        },
        [theme.breakpoints.down('sm')]: {
            width: '35vw',
            height: '35vw',
        },
        [theme.breakpoints.down('xs')]: {
            width: '70vw',
            height: '70vw',
        },
    },
    personText: {
        fontWeight: 'bold',
    },
    personEmail: {
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        cursor: 'pointer',
    },
}));