import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from './Footer';
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';

const App = ()=>{
const [addItem, setAddItem] = useState([]);
const addNote = (note) =>{
    // alert('note added')

    setAddItem((prevData)=>{
        return [...prevData, note];
    })
    console.log(note);

}
const onDelete = (id)=>{
    setAddItem((olddata)=>
        olddata.filter((currdata,indx)=>{
            return indx !== id;
        })
    )
}

return(
<>
<Header/>
<CreateNote passNote={addNote}/>    

{addItem.map((val,index)=>{    /*once add button is clicked note will display */
  if(val.title !=='' || val.content !==''){
    return <Note
    key={index}
    id={index}
    title={val.title}
    content={val.content}
    deleteItem={onDelete}
/>
  }
})}

<Footer/>
</>

);
}
export default App;