import React, { useState,useEffect} from 'react'
import ListItem from '../components/ListItem'
import Add_note from '../components/add_note';
const NoteList = () => {
    
    let [notes, All_note] = useState([])
    const [addingNote, setAddingNote] = useState(false);
    const [newNoteTitle, setNewNoteTitle] = useState('');
    
    useEffect(() => { getNotes() },[])
       
    let getNotes = async () => {
        let response = await fetch ('/call_api/All_Note/')
        let data = await response.json()
        console.log('data:',data)
        All_note(data)
    }

    let add_another_note = async() => 
    {
        fetch(`http://127.0.0.1:8000//call_api/All_Note/`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ note_title: newNoteTitle }) 
        })
        getNotes();
        setNewNoteTitle('');
        setAddingNote(false);
    }

    const handleAddNoteClick = () => {
        setAddingNote(true);
      };
    
    const handleNoteTitleChange = (e) => {
        setNewNoteTitle(e.target.value);
    }    
    return (
        <div className='notes'>
            <div className='note-header'>
                <h2 className='notes-title'>&#9782; Notes</h2>
                <p className='notes-count'>{notes.length}</p>
            </div>
            <div className='notes-list'>
                {notes.map((item,index) => (
                    <ListItem key={index} item ={item}/>
                    // <Link to={`/detail_note/${item.id}/`}>
                    //     <h3>{item.note_title}</h3>
                    // </Link>
                ))}
                {addingNote ? (
                    <div>
                        <input
                        type='text'
                        placeholder='Enter Note Title'
                        value={newNoteTitle}
                        onChange={handleNoteTitleChange}
                        />
                        <button onClick={add_another_note}>Submit</button>
                    </div>
                ) : null}   
            </div>
            <button onClick={handleAddNoteClick}>
                <Add_note />
            </button>
        </div>
    )
}

export default NoteList
