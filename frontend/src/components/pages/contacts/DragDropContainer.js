import {DragDropContext, Droppable} from "react-beautiful-dnd";
import {TableBody} from "@material-ui/core";
import DragDropRow from "./DragDropRow";
import React from "react";

export default function DragTable({contacts, setContacts, remove})
{
    return (
        <DragDropContext onDragEnd={(result) => onDragEnd(result, contacts, setContacts)}>
            <Droppable droppableId={'1'} direction="vertical">
                {provided =>
                    <TableBody ref={provided.innerRef} {...provided.droppableProps}>
                        {contacts && contacts.map((contact, index) =>
                            <DragDropRow index={index} contact={contact} key={index}
                                         remove={() => remove(index)}/>)
                        }
                        {provided.placeholder}
                    </TableBody>
                }
            </Droppable>
        </DragDropContext>
    )
}

function onDragEnd(result, contacts, setContacts)
{
    // dropped outside the list
    if (!result.destination)
    {
        return;
    }
    let sourceIndex = result.source.index;
    let destinationIndex = result.destination.index;
    if (sourceIndex === destinationIndex) return;
    if (destinationIndex > sourceIndex) destinationIndex += 1;

    let updatedContacts = [];
    for (let i = 0; i < contacts.length; i++)
    {
        if (i === destinationIndex)
        {
            updatedContacts.push(contacts[sourceIndex])
            destinationIndex = -3;
            i--;
        } else if (i !== sourceIndex)
        {
            updatedContacts.push(contacts[i])
        }
    }
    if (destinationIndex === contacts.length) updatedContacts.push(contacts[sourceIndex]);

    setContacts(updatedContacts)
}