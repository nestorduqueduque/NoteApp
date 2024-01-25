import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function ListNotes() {
    const urlBase = "http://localhost:8080/notes/list";
    
    const[notes, setNotes] = useState([]);

    useEffect(() => {
        loadNotes();
    }, []);

    const loadNotes = async () => {
        const result = await axios.get(urlBase);
        setNotes(result.data);
    }

  return (
    <div className='notes__container'>
      {notes.map((note) => (
        <Link to={`/edit-note/${note.id}`} className='note'>
            <h4>{note.title.length > 40 ? (note.title.substr(0, 40)) + '...': note.title}</h4>
            <p>{note.description}</p>
          </Link> 
      ))}
    </div>
    
  );

}
