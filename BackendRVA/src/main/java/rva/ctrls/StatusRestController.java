package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import rva.jpa.Status;
import rva.reps.StatusRepository;

@CrossOrigin
@Api(tags="Status CRUD operacije")
@RestController
public class StatusRestController {
	@Autowired
	private StatusRepository statusRepository;
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@ApiOperation(value="Vraca kolekciju statusa iz baze podataka")
	@GetMapping("/status")
	public Collection<Status> getStatuse() {
		return statusRepository.findAll();
	}

	@ApiOperation(value="Vraca status sa prosledjenim id-om iz baze podataka")
	@GetMapping("/status/{id}")
	public Status getStatus(@PathVariable Integer id) {
		return statusRepository.getOne(id);
	}

	@ApiOperation(value="Vraca sve statuse iz baze podataka, koji sadrze prosledjeni string u svom nazivu")
	@GetMapping("/statusNaziv/{naziv}")
	public Collection<Status> getByNaziv(@PathVariable String naziv) {
		return statusRepository.findByNazivContainingIgnoreCase(naziv);
	}

	@ApiOperation(value="Brise status sa prosledjenim id-om iz baze podataka")
	@Transactional
	@DeleteMapping("/status/{id}")
	public ResponseEntity<HttpStatus> deleteStatus(@PathVariable Integer id) {
		if (statusRepository.existsById(id)) {
			statusRepository.deleteById(id);
			jdbcTemplate.execute("delete from student where status=" + id);
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	}

	@ApiOperation(value="Upisuje novi status u bazu podataka")
	@PostMapping("/status")
	public ResponseEntity<HttpStatus> insertStatus(@RequestBody Status status) {
		statusRepository.save(status);
		return new ResponseEntity<HttpStatus>(HttpStatus.OK);
	}

	@ApiOperation(value="Azurira postojeci status u bazi podataka")
	@PutMapping("/status")
	public ResponseEntity<HttpStatus> updateStatus(@RequestBody Status status) {
		if (statusRepository.existsById(status.getId())) {
			statusRepository.save(status);
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.OK);
	}
}
