
import axios from 'axios';
import React, { useState } from 'react'
import { MdArrowBackIosNew } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

export default function CreateNote() {
   
    let navigation = useNavigate();
    
    const[notes, setNotes]=useState({
        title:"",
        description:""
    })

    const{title, description} = notes;

    const onInputChange = (e) =>{
        setNotes({...notes, [e.target.name]: e.target.value});  
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const urlBase = "https://noteapp-production-b75b.up.railway.app/notes/add";
        await axios.post(urlBase, notes);
        navigation('/')

    }



  return (
    <section>
        <form className='create-note__form' onSubmit={(e) => onSubmit(e)}>
            <header className='create-note__header'>
                <Link to="/" className='btn'><MdArrowBackIosNew /></Link>
                <button className='btn lg primary' type="submit">Save</button>
                
            </header>
                <input type='text' 
                placeholder='Title' 
                autoFocus
                id="title"
                name="title"
                required={true}
                value={title} onChange={(e) => onInputChange(e)}
                />

                <input
                type='text'
                rows="28" 
                placeholder='Note descriptions...'
                id="description"
                name="description"
                value={description} onChange={(e) => onInputChange(e)}
                />
                
        </form>
    </section>
  )
}
