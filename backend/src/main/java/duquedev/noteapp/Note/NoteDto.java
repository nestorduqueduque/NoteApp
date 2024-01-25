package duquedev.noteapp.Note;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NoteDto {

    public Long id;
    public String title;
    public String description;
    public String type;
   }
