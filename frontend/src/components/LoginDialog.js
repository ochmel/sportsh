import * as React from "react";
import {useState} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {getText} from "../translations";

const defaultCredentials = {username: '', password: ''};

export default function LoginDialog({isCzech, setOpen, open, loginFinished}) {
    const [credentials, setCredentials] = useState(defaultCredentials)
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const classes = useStyles();

    function handleLogin() {
        setIsError(false);
        setLoading(true);
        fetch('/authenticate', {
            method: 'post',
            body: JSON.stringify(credentials),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                response.json().then(() => {
                    setLoading(false);
                    setCredentials(defaultCredentials);
                    loginFinished();
                })
            } else {
                setLoading(false);
                setIsError(true);
            }
        })
    }

    return (
        <div>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>{getText('logToEdit', isCzech)}</DialogTitle>
                <DialogContent>
                    {isError && <Typography color='secondary'>{getText('wrongCredentials', isCzech)}</Typography>}
                    <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        label={getText('name', isCzech)}
                        fullWidth
                        value={credentials.username}
                        onChange={event => setCredentials({...credentials, username: event.target.value})}
                    />
                    <TextField
                        margin="dense"
                        id="password"
                        label={getText('password', isCzech)}
                        type="password"
                        fullWidth
                        value={credentials.password}
                        onChange={event => setCredentials({...credentials, password: event.target.value})}
                    />
                </DialogContent>
                <DialogActions className={classes.buttons}>
                    {loading && <CircularProgress/>}
                    <Button onClick={() => setOpen(false)} color="primary">
                        {getText('cancel', isCzech)}
                    </Button>
                    <Button onClick={handleLogin} color="primary">
                        {getText('log', isCzech)}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    buttons: {
        padding: theme.spacing(2),
    }
}));