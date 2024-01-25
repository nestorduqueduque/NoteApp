import { BrowserRouter, Routes, Route } from "react-router-dom";

import Notes from "./pages/Notes.jsx";
import CreateNote from "./pages/CreateNote.jsx";
import EditNote from "./pages/EditNote.jsx"
import ArchivedNotes from "./pages/ArchivedNotes.jsx"
import EditArchivedNotes from "./pages/EditArchivedNotes.jsx";



function App() {
  return (
    <main id="app">
    <BrowserRouter>
      <Routes>
          <Route path ="/" element={<Notes/>}/>
          <Route path ="/create-note" element={<CreateNote/>}/>
          <Route path ="/edit-note/:id" element={<EditNote/>}/>
          <Route path ="/archived-note" element={<ArchivedNotes/>}/>
          <Route path ="/edit-archived-note/:id" element={<EditArchivedNotes/>}/>
      </Routes>
    </BrowserRouter>
    </main>
  );
}

export default App;
