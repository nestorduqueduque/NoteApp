package duquedev.noteapp.Note;

import java.util.List;
import java.util.Optional;

public interface NoteService {
    public List<Note> listNormalNote(String type);

    public List<Note> listArchivedNote(String type);

    public Note searchNote(Long id);

    public Note saveNote(Note note);

    Optional<NoteDto> searchOptionalNote(Long id);

    public void deleteNote(Long id);


}
