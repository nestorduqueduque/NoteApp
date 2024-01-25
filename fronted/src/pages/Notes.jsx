import React from 'react'
import { Link } from 'react-router-dom';
import { FaPlusSquare } from "react-icons/fa";
import ListNotes from '../components/ListNotes';
import { IoMdArchive } from "react-icons/io";


export default function Notes() {
  return (
    <section>
        <header className="notes__header">
            <h2>My Notes</h2>
           
            <Link to={"/archived-note"}className='btn'> <IoMdArchive /></Link>
            
        </header>
        <div className="notes__container">
                <ListNotes />
        </div>
        <Link to={'/create-note'}className='btn add__btn '> <FaPlusSquare /></Link>
    </section>
  )
}
