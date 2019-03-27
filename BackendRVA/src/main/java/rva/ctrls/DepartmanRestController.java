package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import rva.jpa.Departman;
import rva.reps.DepartmanRepository;

@RestController
public class DepartmanRestController {
	@Autowired
	private DepartmanRepository departmanRepository;
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@GetMapping("/departman")
	public Collection<Departman> getDepartmani() {
		return departmanRepository.findAll();
	}
	
	@GetMapping("/departman/{id}")
	public Departman getDepartman(@PathVariable Integer id) {
		return departmanRepository.getOne(id);
	}
	
	@GetMapping("/departmanNaziv/{naziv}")
	public Collection<Departman> getByNaziv(@PathVariable String naziv) {
		return departmanRepository.findByNazivContainingIgnoreCase(naziv);
	}
	
	@PostMapping("/departman/")
	public ResponseEntity<HttpStatus> insertDepartman(@RequestBody Departman departman) {
		departmanRepository.save(departman);
		return new ResponseEntity<HttpStatus>(HttpStatus.OK);
	}
	
	@PutMapping("/departman/")
	public ResponseEntity<HttpStatus> updateDepartman(@RequestBody Departman departman) {
		if(departmanRepository.existsById(departman.getId())) {
			departmanRepository.save(departman);
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	@DeleteMapping("/departman/{id}")
	public ResponseEntity<HttpStatus> deleteDepartman(@PathVariable Integer id) {
		if (departmanRepository.existsById(id)) {
			departmanRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
