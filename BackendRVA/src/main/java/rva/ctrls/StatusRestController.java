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

import rva.jpa.Status;
import rva.reps.StatusRepository;

@RestController
public class StatusRestController {
	@Autowired
	private StatusRepository statusRepository;
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@GetMapping("/status")
	public Collection<Status> getStatuse() {
		return statusRepository.findAll();
	}
	
	@GetMapping("/status/{id}")
	public Status getStatus(@PathVariable Integer id) {
		return statusRepository.getOne(id);
	}
	
	@GetMapping("/statusNaziv/{naziv}")
	public Collection<Status> getByNaziv(@PathVariable String naziv) {
		return statusRepository.findByNazivContainingIgnoreCase(naziv);
	}
	
	@DeleteMapping("/status/{id}")
	public ResponseEntity<HttpStatus> deleteStatus(@PathVariable Integer id) {
		if (statusRepository.existsById(id)) {
			statusRepository.deleteById(id);
			jdbcTemplate.execute("insert into \"status\"(\"id\", \"naziv\", \"oznaka\") values (-101, 'ObrisaniTest', 'OT');");
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	}
	
	@PostMapping("/status")
	public ResponseEntity<HttpStatus> insertStatus(@RequestBody Status status) {
		statusRepository.save(status);
		return new ResponseEntity<HttpStatus>(HttpStatus.OK);
	}
	
	@PutMapping("/status")
	public ResponseEntity<HttpStatus> updateStatus(@RequestBody Status status) {
		if (statusRepository.existsById(status.getId())) {
			statusRepository.save(status);
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.OK);
	}
}
