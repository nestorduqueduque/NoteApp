package duquedev.noteapp.Note;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NoteServiceImpl implements NoteService{

    @Autowired
    private NoteRepository noteRepository;


    @Override
    public List<Note> listNormalNote(String type) {
        return  this.noteRepository.findAllByType("NORMAL");
    }

    @Override
    public List<Note> listArchivedNote(String type) {
        return this.noteRepository.findAllByType("ARCHIVED");
    }

    @Override
    public Note searchNote(Long id) {
        Note note = this.noteRepository.findById(id).orElse(null);
        return note;
    }

    @Override
    public Note saveNote(Note note) {
        return this.noteRepository.save(note);
    }

    @Override
    public Optional<NoteDto> searchOptionalNote(Long id) {
        Optional<Note> optionalNote = noteRepository.findById(id);
        return optionalNote.map(this::convertEntityToDtoList);
    }

    @Override
    public void deleteNote(Long id) {
         this.noteRepository.deleteById(id);

    }

    public NoteDto convertEntityToDtoList(Note note){
        NoteDto noteDto = new NoteDto();
        noteDto.setId(note.getId());
        noteDto.setTitle(note.getTitle());
        noteDto.setDescription(note.getDescription());
        noteDto.setType(note.getType());
        return noteDto;
    }
}
