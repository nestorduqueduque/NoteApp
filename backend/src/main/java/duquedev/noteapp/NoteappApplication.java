package duquedev.noteapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class NoteappApplication {

	public String PORT = System.getenv("PORT");

	public static void main(String[] args) {
		SpringApplication.run(NoteappApplication.class, args);
	}

}
