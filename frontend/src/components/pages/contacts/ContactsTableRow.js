import {TableCell, TableRow} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {getText} from "../../../tools/translations";
import {getPhotoUrl} from "../../../tools/functions";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from "@material-ui/core/Tooltip";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export const ContactsTableRow = React.memo(function ContactsTableRow({
                                                                         contact,
                                                                         isCzech,
                                                                         setSnack,
                                                                         updateContact,
                                                                         remove
                                                                     }) {
    const classes = useStyles();
    const photoUrl = getPhotoUrl(contact.photoId);

    function clickOnImage() {
        document.querySelector('#i' + contact.id).click();
    }

    function handleChange(event) {
        const target = event.target;
        update(target.name, target.value);
    }

    function update(name, value) {
        let updatedData = {...contact, [name]: value}
        updateContact(updatedData, name === 'photoId')
    }

    function changeFunction(functionIndex, value) {
        let updatedData = {...contact};
        updatedData.functions[functionIndex] = value;
        updateContact(updatedData);
    }

    function handleImageChanged(file) {
        if (file.type.indexOf("image") !== -1) {
            if (file.size > 400000) {
                setSnack({message: getText('photoTooBig', isCzech), open: true, severity: 'error'})
            } else {
                uploadImage(file)
            }
        }
    }

    function uploadImage(image) {
        if (!!contact.photoId) {
            deleteExistingPhoto(contact.photoId);
        }

        let formData = new FormData();
        formData.append("file", image);
        fetch('/files', {
            method: 'post',
            mode: 'cors',
            body: formData,
        }).then(response => {
            if (response.ok) {
                response.text().then(fileId => {
                    update('photoId', fileId)
                    setSnack({message: getText('photoUpload', isCzech), open: true, severity: 'success'})
                })
            } else {
                setSnack({message: getText('photoUploadError', isCzech), open: true, severity: 'error'})
            }
        })
    }

    function deleteExistingPhoto(photoId) {
        fetch('/files/' + photoId, {
            method: 'delete',
            mode: 'cors',
        }).then(response => {
            if (response.ok) {
                setSnack({message: getText('oldPhotoDeleted', isCzech), open: true, severity: 'success'})

            } else {
                setSnack({message: getText('oldPhotoNotDeleted', isCzech), open: true, severity: 'error'})
            }
        })
    }

    return (
        <TableRow className={classes.root}>
            <TableCell>
                <DeleteIcon style={{cursor: 'pointer'}} onClick={remove}/>
            </TableCell>

            <TableCell className={classes.photoCell}>
                {photoUrl
                    ?
                    <img src={photoUrl} className={classes.avatar} onClick={clickOnImage}
                         id={contact.id} alt={getText('contactPhoto', isCzech)}/>
                    :
                    <div className={classes.fakeAvatar} onClick={clickOnImage}>
                        <PersonOutlineIcon className={classes.personIcon}/>
                    </div>
                }
                <input style={{display: 'none'}} id={"i" + contact.id} type="file" accept="image/png, image/jpeg"
                       onChange={event => handleImageChanged(event.target.files[0])}/>
            </TableCell>

            <TableCell className={classes.cell}>
                <TextField onChange={handleChange} name='name' value={contact.name} size='small'/>
            </TableCell>

            <TableCell className={classes.cell}>
                <TextField onChange={handleChange} name='email' value={contact.email} size='small'/>
            </TableCell>

            <TableCell className={classes.cell}>
                <TextField onChange={handleChange} name='phone' value={contact.phone} size='small'/>
            </TableCell>

            <TableCell className={classes.functions}>
                <FormGroup className={classes.checkboxes}>
                    <Tooltip title="Vedení">
                        <FormControlLabel
                            label="V" labelPlacement="top" className={classes.checkbox} control={
                            <Checkbox color="primary" onChange={(event => update("manager", event.target.checked))}
                                      checked={contact.manager} value={contact.manager}/>
                        }
                        />
                    </Tooltip>
                    <Tooltip title="Cvičitel">
                        <FormControlLabel
                            label="C" labelPlacement="top" className={classes.checkbox} control={
                            <Checkbox color="primary"
                                      onChange={(event => update("instructor", event.target.checked))}
                                      checked={contact.instructor} value={contact.instructor}/>
                        }
                        />
                    </Tooltip>
                    <Tooltip title="Masér">
                        <FormControlLabel
                            label="M" labelPlacement="top" className={classes.checkbox} control={
                            <Checkbox color="primary" onChange={(event => update("masseur", event.target.checked))}
                                      checked={contact.masseur} value={contact.masseur}/>
                        }
                        />
                    </Tooltip>
                    <Tooltip title="Trenér">
                        <FormControlLabel
                            label="T" labelPlacement="top" className={classes.checkbox} control={
                            <Checkbox color="primary" onChange={(event => update("trainer", event.target.checked))}
                                      checked={contact.trainer} value={contact.trainer}/>
                        }
                        />
                    </Tooltip>
                    <Tooltip title="Správce SG">
                        <FormControlLabel
                            label="SG" labelPlacement="top" className={classes.checkbox} control={
                            <Checkbox color="primary"
                                      onChange={(event => update("siliconGym", event.target.checked))}
                                      checked={contact.siliconGym} value={contact.siliconGym}/>
                        }
                        />
                    </Tooltip>
                    <Tooltip title="Správce blokpos">
                        <FormControlLabel
                            label="BP" labelPlacement="top" className={classes.checkbox} control={
                            <Checkbox color="primary" onChange={(event => update("blockGym", event.target.checked))}
                                      checked={contact.blockGym} value={contact.blockGym}/>
                        }
                        />
                    </Tooltip>
                </FormGroup>
                {contact.functions.map((func, i) =>
                    <TextField onChange={event => changeFunction(i, event.target.value)} key={i}
                               className={classes.personText} value={func} size='small'/>
                )}
                <AddIcon onClick={() => update('functions', [...contact.functions, ''])} className={classes.icon}/>
                <RemoveIcon className={classes.icon}
                            onClick={() => update('functions', contact.functions.slice(0, contact.functions.length - 1))}/>
            </TableCell>
        </TableRow>
    )
})

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
        }
    },
    avatar: {
        alignSelf: 'center',
        width: 80,
        height: 80,
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.main,
        cursor: 'pointer',
        borderRadius: '100%',
    },
    fakeAvatar: {
        alignSelf: 'center',
        width: 80,
        height: 80,
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.main,
        cursor: 'pointer',
        borderRadius: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    personIcon: {
        width: 50,
        height: 50,
    },
    icon: {
        cursor: 'pointer',
        marginLeft: theme.spacing(1)
    },
    checkboxes: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    checkbox: {
        margin: 0,
        padding: 0,
    },
    functions: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        minWidth: 300,
    },
    cell: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
    },
    photoCell: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        color: theme.palette.primary.contrastText,
        fontSize: 9,
    }
}));


