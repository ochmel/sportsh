import {Paper, Table, TableBody, TableContainer} from "@material-ui/core";
import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import {ContactsTableRow} from "./ContactsTableRow";
import DragTable from "./DragDropContainer";

export const ContactsTable = React.memo(function ContactsTable({isCzech, contacts, setContacts, setSnack, dragDrop})
{
    function findHighestId(contacts)
    {
        let highest = 1;
        for (const contact of contacts)
        {
            if (contact.id > highest)
            {
                highest = contact.id
            }
        }
        return highest;
    }

    function addContact()
    {
        setContacts([{
            id: findHighestId(contacts) + 1,
            photoId: "",
            name: "",
            email: "",
            phone: "",
            functions: [],
            manager: false,
            instructor: false,
            masseur: false,
            trainer: false,
            siliconGym: false,
            blockGym: false,
        }, ...contacts])
    }

    function updateContact(index, updated, shouldSave)
    {
        let updatedContacts = [...contacts];
        updatedContacts[index] = updated;
        setContacts(updatedContacts, shouldSave);
    }

    function remove(index)
    {
        let copy = [...contacts];
        copy.splice(index, 1)
        setContacts(copy)
    }

    return (
        <TableContainer component={Paper}>
            <Fab color="primary" onClick={addContact}>
                <AddIcon/>
            </Fab>
            <Table>
                {dragDrop
                    ?
                    <DragTable contacts={contacts} setContacts={setContacts} remove={remove}/>
                    :
                    <TableBody>
                        {contacts && contacts.map((contact, index) =>
                            <ContactsTableRow
                                index={index} contact={contact} key={index} isCzech={isCzech}
                                updateContact={(contact, shouldSave) => updateContact(index, contact, shouldSave)}
                                setSnack={setSnack} remove={() => remove(index)}
                            />)
                        }
                    </TableBody>
                }
            </Table>
        </TableContainer>
    )
})