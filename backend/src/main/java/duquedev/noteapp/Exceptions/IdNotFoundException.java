package duquedev.noteapp.Exceptions;

public class IdNotFoundException extends  RuntimeException{
    public IdNotFoundException(String message){
        super(message);
    }
}
