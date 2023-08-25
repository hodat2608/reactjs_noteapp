import React from 'react'
import { useState,useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { Link  } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { ReactComponent as addicon } from '../assets/add.svg'

const NotePages = () => {
    let {id} = useParams(); 
    let[item , SetItem] = useState([])
    let navigate = useNavigate();

    useEffect(() => {
        fetchDetailNote();
    }, [id]);
    
    let fetchDetailNote = async () => {
        let response = await fetch(`/call_api/Action/${id}/`);
        let data = await response.json();
        console.log('data:', data);
        SetItem(data);
    };

    let updateNote = async() => {
        fetch(`http://127.0.0.1:8000/call_api/Action/${id}/`,{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)  
        })
    }

    let detele_note = async() =>{
        fetch(`http://127.0.0.1:8000/call_api/Action/${id}/`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        navigate('/all_note/')
    }

    let handleSubmit = () => {
        updateNote()
        navigate('/all_note/')
    }

    let handleChange = (value) => {
        SetItem(item => ({ ...item, 'note_conntent': value }))
        console.log('Handle Change:', item)
    }

    let getTime = (item) => {
        return new Date(item.updated).toLocaleDateString()
      }

    return (
            <div className='note'>
                <div className='note-header'>
                    <ArrowLeft onClick ={handleSubmit}/>
                </div>
                <button onClick={detele_note}>Delete</button>
                <textarea onChange={(e) => { handleChange(e.target.value) }} value={item?.note_conntent}></textarea>
                <div className='date'>
                    <p>Created :{item?.created}</p>
                    <p>Last updated :<span>{getTime(item)}</span></p>
                </div>
                
            </div>  
        );
}
export default NotePages
