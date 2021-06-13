import {makeStyles} from "@material-ui/core/styles";
import React, {useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import LoginDialog from "../../LoginDialog";
import Button from "@material-ui/core/Button";
import {getText} from "../../../translations";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';
import {ContactsTable} from "./ContactsTable";
import ContactsGrid from "./ContactsGrid";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export function Alert(props)
{
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const defaultSnack = {message: '', open: false, severity: 'info'};

export default function Contacts({isCzech})
{
    const classes = useStyles();
    const [loginOpened, setLoginOpened] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [contacts, setContacts] = useState(null);
    const [dragDrop, setDragDrop] = useState(false);
    const [contactsEditable, setContactsEditable] = useState(false);
    const [snack, setSnack] = useState(defaultSnack);

    useEffect(() => getContacts(true), [])

    function getContacts(firstLoad)
    {
        fetch('/content/5f267b11198f1f4ad132c57d', {
            method: 'get',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'}
        }).then(response =>
        {
            if (response.ok)
            {
                response.json().then(data =>
                {
                    let parsed = JSON.parse(data.content);
                    if (firstLoad)
                    {
                        save(parsed, false, true)
                    }
                    setContacts(parsed)
                })
            } else
            {
                setSnack({message: getText('getContactsError', isCzech), open: true, severity: 'error'})
                setContacts([])
            }
        })
    }

    function handleClose(event, reason)
    {
        if (reason === 'clickaway')
        {
            return;
        }

        setSnack(defaultSnack);
    }

    function loginFinished()
    {
        setContactsEditable(true);
        setLoggedIn(true);
        setLoginOpened(false);
    }

    function save(data, shouldNotify, firstLoad)
    {
        fetch('/content', {
            method: 'put',
            body: JSON.stringify({id: '5f267b11198f1f4ad132c57d', content: JSON.stringify(data)}),
            mode: 'cors',
            headers: {'Content-Type': 'application/json'}
        }).then(response =>
        {
            if (response.ok)
            {
                if (shouldNotify)
                {
                    setSnack({message: getText('putContactsSuccess', isCzech), open: true, severity: 'success'});
                }
                if (firstLoad)
                {
                    setContactsEditable(true);
                    setLoggedIn(true);
                }
            } else if (response.status === 403)
            {
                if (!firstLoad)
                {
                    setSnack({message: getText('putContacts403', isCzech), open: true, severity: 'error'})
                }
                setLoggedIn(false);
            } else
            {
                setSnack({message: getText('putContactsError', isCzech), open: true, severity: 'error'})
            }
        })
    }

    function updateContacts(updatedContacts, shouldSave)
    {
        setContacts(updatedContacts);
        if (shouldSave)
        {
            save(updatedContacts, false);
        }
    }

    return (
        <div className={classes.root}>
            <div className={classes.heading}>
                <Typography variant='h3' className={classes.headingText}>
                    <div onClick={() => setLoginOpened(true)}>{getText('contacts', isCzech)}</div>
                </Typography>
            </div>
            <LoginDialog isCzech={isCzech} open={loginOpened} setOpen={setLoginOpened} loginFinished={loginFinished}/>
            <div className={classes.emails}>
                <Typography variant='h6' className={classes.mailPrefix}>
                    {getText('contactMails', isCzech)}
                </Typography>
                <Link href="mailto:fitcentrum@siliconhill.cz" target="_blank" color='inherit' className={classes.link}>
                    fitcentrum@siliconhill.cz
                </Link>
                <Link href="mailto:treneri@siliconhill.cz" target="_blank" color='inherit' className={classes.link}>
                    treneri@siliconhill.cz
                </Link>
                <Link href="mailto:cviceni@siliconhill.cz" target="_blank" color='inherit' className={classes.link}>
                    cviceni@siliconhill.cz
                </Link>
                <Link href="mailto:masaze@siliconhill.cz" target="_blank" color='inherit' className={classes.link}>
                    masaze@siliconhill.cz
                </Link>
            </div>
            {loggedIn &&
            <div className={classes.actions}>
                <FormControlLabel label={getText('contactsEditable', isCzech)} className={classes.drag}
                                  control={<Switch onChange={() => setContactsEditable(!contactsEditable)}
                                                   checked={contactsEditable} color="primary"/>}/>
                {contactsEditable &&
                <Button variant='contained' onClick={() => save(contacts, true)} size='small'
                        className={classes.save} color='primary'>
                    {getText('save', isCzech)}
                </Button>}
                {contactsEditable && <FormControlLabel label='Drag&Drop' className={classes.drag}
                                                       control={<Switch onChange={() => setDragDrop(!dragDrop)}
                                                                        checked={dragDrop} color="primary"/>}/>}
            </div>}

            {loggedIn && contactsEditable
                ?
                <ContactsTable isCzech={isCzech} contacts={contacts} setSnack={setSnack} dragDrop={dragDrop}
                               setContacts={(data, shouldSave) => updateContacts(data, shouldSave)}/>
                :
                <ContactsGrid isCzech={isCzech} contacts={contacts}/>
            }

            <Snackbar open={snack.open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={snack.severity}>
                    {snack.message}
                </Alert>
            </Snackbar>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '8vh',
        paddingBottom: '8vh',
        paddingLeft: '3vw',
        paddingRight: '3vw',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '6vh',
            paddingBottom: '6vh',
            paddingLeft: '5vw',
            paddingRight: '5vw',
        },
    },
    heading: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        [theme.breakpoints.down('sm')]: {
            padding: '4vh 4vh 0 1.5vh',
        }
    },
    headingText: {
        display: 'flex',
        color: theme.palette.primary.main,
        fontWeight: 'bold',
        marginRight: theme.spacing(3),
    },
    save: {
        width: 100,
        marginRight: theme.spacing(3),
    },
    drag: {
        color: theme.palette.primary.main,
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginLeft: theme.spacing(1.5),
        }
    },
    mailPrefix: {
        display: 'flex',
        flexDirection: 'row',
        color: theme.palette.primary.main,
        [theme.breakpoints.down('sm')]: {
            textAlign: 'left',
            flexDirection: 'column',
        },
        paddingRight: theme.spacing(1),
    },
    link: {
        fontWeight: 'bold',
        color: theme.palette.primary.main,
        paddingRight: theme.spacing(1),
        fontSize: 17
    },
    emails: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            padding: '0 4vh 2vh 2vh',
        }
    },
}));
