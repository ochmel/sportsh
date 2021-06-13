import {TableCell, TableRow, Typography} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import {Draggable} from "react-beautiful-dnd";

const DraggableComponent = (id, index) => (props) =>
{
    return (
        <Draggable draggableId={id} index={index}>
            {provided => (
                <TableRow ref={provided.innerRef} {...provided.draggableProps}
                    {...provided.dragHandleProps} {...props}
                >
                    {props.children}
                </TableRow>
            )}
        </Draggable>
    )
}

export default function DragDropRow({contact, index, remove})
{
    return (
        <TableRow component={DraggableComponent(contact.id, index)}>
            <TableCell>
                <DeleteIcon style={{cursor: 'pointer'}} onClick={remove}/>
            </TableCell>
            <TableCell>
                <Typography variant='subtitle1'>
                    {contact.name}
                </Typography>
            </TableCell>
        </TableRow>
    )
}