package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import rva.jpa.Student;
import rva.reps.StudentRepository;

@RestController
public class StudentRestController {
	@Autowired
	private StudentRepository studentRepository;
	
	@GetMapping("/student")
	public Collection<Student> getStudenti() {
		return studentRepository.findAll();
	}
	
	@GetMapping("/student/{id}")
 	public Student getStudent(@PathVariable Integer id) {
		return studentRepository.getOne(id);
	}
	
	@PostMapping("/student/")
	public ResponseEntity<HttpStatus> insertStudent(@RequestBody Student student) {
		studentRepository.save(student);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PutMapping("/student")
	public ResponseEntity<HttpStatus> updateStudent(@RequestBody Student student) {
		if (studentRepository.existsById(student.getId())) {
			studentRepository.save(student);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@DeleteMapping("/student/{id}")
	public ResponseEntity<HttpStatus> deleteStudent(@PathVariable Integer id) {
		if (studentRepository.existsById(id)) {
			studentRepository.deleteById(id);
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	}
}
