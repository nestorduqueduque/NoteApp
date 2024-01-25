
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdArrowBackIosNew } from "react-icons/md";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";
import { IoMdArchive } from "react-icons/io";

export default function EditNote() {

    const urlBase = "https://noteapp-production-b75b.up.railway.app/notes";
   
    let navigation = useNavigate();

    const {id} = useParams();
    
    const[notes, setNotes]=useState({
        title:"",
        description:""
    })

    const{title, description} = notes;

    useEffect(() => {
        loadNote();
    },[])

    const loadNote = async () => {
        const result = await axios.get(`${urlBase}/${id}`)
        setNotes(result.data);
    }

    const HandledeleteNote = async () => {
        try {
            await axios.delete(`${urlBase}/${parseInt(id)}`, notes);
            navigation('/');
        } catch (error) {
            console.error("Error al eliminar la nota", error);
        }
    }
    

    const onInputChange = (e) =>{
        setNotes({...notes, [e.target.name]: e.target.value});  
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`${urlBase}/${parseInt(id)}`, notes);
        navigation('/')
    }

    const onArchivaded = async(e) => {
        await axios.put(`${urlBase}/${parseInt(id)}/archived`, notes);
        navigation('/archived-note')
        
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
        <button onClick={() => onArchivaded(notes.id)} 
        className='btn add__btn archived '>
        <IoMdArchive /></button>
        <button className='btn danger add__btn '
         onClick={() => HandledeleteNote(notes.id)}>
        <MdDeleteForever />
        </button>
    </section>
  )
}
