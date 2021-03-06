import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const CreateNote = (props)=>{

    const [expand, setExpand] = useState(false);

const [note, setNote] = useState({
    title:'',
    content:'',
});

const inputEvent = (event)=>{

    // const value = event.target.value;
    // const name = event.target.name;

    const {name, value} = event.target;

    setNote((prevData)=>{
        return {
            ...prevData,
            [name] : value,
        }
    });

    console.log(note);
};

const addEvent=()=>{
    props.passNote(note);
    setNote({         /*to clear input and text area field */
        title:'',
        content:'',
    });
}

const expandIt = ()=>{
    setExpand(true);
}

const shrink = ()=>{
    setExpand(false);
}

return(
<>
<div className='main_note' onDoubleClick={shrink}>
    <form>
        {expand?
        <input type='text' autoComplete='off' name='title' value={note.title} 
         onChange={inputEvent} placeholder='Title' /> : null}
        <textarea rows='' columns='' autoComplete='off' name='content' value={note.content}  onChange={inputEvent} onClick={expandIt}  placeholder='write a note...'></textarea>
        {expand?
        <Button onClick={addEvent}>
            <AddIcon className='plus_sign'/>
        </Button>:null}
    </form> 
</div>
</>

);
}
export default CreateNote;