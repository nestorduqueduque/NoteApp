import React from 'react'
import { Link } from 'react-router-dom'
import { MdArrowBackIosNew } from "react-icons/md";
import ListArchivadedNotes from '../components/ListArchivadedNotes';

export default function ArchivedNotes() {
  return (
      <section>
      <header className='create-note__header'>
            <Link to="/" className='btn'><MdArrowBackIosNew /></Link>
            <h2>Archived Notes</h2>
      </header>
      <div className="notes__container">
                <ListArchivadedNotes />
        </div>
      </section>

  )
}
