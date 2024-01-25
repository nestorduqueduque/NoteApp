package duquedev.noteapp.Note;


import duquedev.noteapp.Exceptions.IdNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("notes")
public class NoteController {

    @Autowired
    private NoteService noteService;

    @GetMapping("/list")
    public List<Note> listNotes(String type){
        return noteService.listNormalNote("NORMAL");
    }

    @GetMapping("/list/archived")
    public List<Note> listNotesArchived(String type){
        return noteService.listArchivedNote("ARCHIVED");
    }

    @GetMapping("/{id}")
    public ResponseEntity<Note> getNoteById(@PathVariable Long id) {
        Note note = this.noteService.searchNote(id);

        if (note == null)
            throw new IdNotFoundException("Don't found the note " + id);

        return ResponseEntity.ok(note);
    }

    @PostMapping("/add")
    public Note addNote(@RequestBody Note note){
        note.setType("NORMAL");
        return noteService.saveNote(note);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Note> updateNote(@PathVariable Long id, @RequestBody Map<String, Object> updates) {
        Note note = this.noteService.searchNote(id);

        if (note == null)
            throw new IdNotFoundException("Don't found the note " + id);

        if (updates.containsKey("title")) {
            note.setTitle((String) updates.get("title"));
        }
        if (updates.containsKey("description")) {
            note.setDescription((String) updates.get("description"));
        }
        this.noteService.saveNote(note);
        return ResponseEntity.ok(note);
    }

    @PutMapping("/{id}/archived")
    public ResponseEntity<Note> archiveNote(@PathVariable Long id) {
        Note note = this.noteService.searchNote(id);

        if (note == null)
            throw new IdNotFoundException("Don't found the note  " + id);


        note.setType("ARCHIVED");

        this.noteService.saveNote(note);
        return ResponseEntity.ok(note);
    }

    @PutMapping("/{id}/dearchived")
    public ResponseEntity<Note> dearchivedNote(@PathVariable Long id) {
        Note note = this.noteService.searchNote(id);

        if (note == null)
            throw new IdNotFoundException("Don't found the note  " + id);


        note.setType("NORMAL");

        this.noteService.saveNote(note);
        return ResponseEntity.ok(note);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteNote(@PathVariable Long id){
        Note note = this.noteService.searchNote(id);
        if(note == null){
            throw new IdNotFoundException("Don't found the note " + id);
        }

        this.noteService.deleteNote(id);

        Map<String, Boolean> answer = new HashMap<>();
        answer.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(answer);
    }






}
