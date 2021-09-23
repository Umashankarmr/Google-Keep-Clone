import React, {useState} from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props)=>{

    const deleteNote = ()=>{
        props.deleteItem(props.id); /*props.id here to which note we are deleting */
    }

return(
<>
<div className='note'>
    <h1> {props.title} </h1>
    <br/>
    <p> {props.content} </p>
    <button className='btn' onClick={deleteNote}>
        <DeleteOutlineIcon className='deleteIcon'/>
    </button>
    
</div>
</>

);
}
export default Note;