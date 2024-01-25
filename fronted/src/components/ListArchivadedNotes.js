import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function ListArchivadedNotes() {
    const urlBase = "https://noteapp-production-b75b.up.railway.app/notes/list/archived";
    
    const[notes, setArchivedNotes] = useState([]);

    useEffect(() => {
        loadArchivedNotes();
    }, []);

    const loadArchivedNotes = async () => {
        try {
          const result = await axios.get(urlBase);
          const archivedNotes = result.data.filter(note => note.type === "ARCHIVED");
          setArchivedNotes(archivedNotes);
        } catch (error) {
          console.error("error to load the notes", error);
        }
      };

  return (
    <div className='notes__container'>
      {notes.map((note) => (
        <Link to={`/edit-archived-note/${note.id}`} className='note'>
            <h4>{note.title.length > 40 ? (note.title.substr(0, 40)) + '...': note.title}</h4>
            <p>{note.description}</p>
          </Link> 
      ))}
    </div>
    
  );

}
