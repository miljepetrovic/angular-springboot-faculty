package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
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
import rva.jpa.Fakultet;
import rva.reps.FakultetRepository;

@CrossOrigin
@Api(tags= {"Fakultet CRUD operacije"})
@RestController
public class FakultetRestController {

	@Autowired
	private FakultetRepository fakultetRepository;
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@ApiOperation(value="Daje listu svih fakulteta iz baze podataka")
	@GetMapping("/fakultet")
	public Collection<Fakultet> getFakulteti() {
		return fakultetRepository.findAll();
	}

	@ApiOperation(value="Vraca podatke iz baze podataka o fakultetu sa prosledjenim id-om")
	@GetMapping("/fakultet/{id}")
	public Fakultet getFakultet(@PathVariable Integer id) {
		return fakultetRepository.getOne(id);
	}

	@ApiOperation(value="Vraca podatke iz baze podataka o fakultetima koji sadrze u svom nazivu prosledjeni string")
	@GetMapping("/fakultetNaziv/{naziv}")
	public Collection<Fakultet> getByNaziv(@PathVariable String naziv) {
		return fakultetRepository.findByNazivContainingIgnoreCase(naziv);
	}

	@ApiOperation(value="Brise fakultet sa prosledjenim id-om iz baze podataka")
	@Transactional
	@DeleteMapping("/fakultet/{id}")
	public ResponseEntity<HttpStatus> deleteFakultet(@PathVariable Integer id) {
		if (fakultetRepository.existsById(id)) {
			fakultetRepository.deleteById(id);
//			if (id == -101) {
//				jdbcTemplate.execute("insert into \"fakultet\"(\"id\", \"naziv\", \"sediste\")"
//						+ "values(-101,'Obrisani test','Obrisani test');");
//			}
			jdbcTemplate.execute("delete from departman where fakultet=" + id);
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	}

	@ApiOperation(value="Upisuje novi fakultet")
	@PostMapping("/fakultet")
	public ResponseEntity<HttpStatus> insertFakultet(@RequestBody Fakultet fakultet) {
		fakultetRepository.save(fakultet);
		return new ResponseEntity<HttpStatus>(HttpStatus.OK);
	}

	@ApiOperation(value="Azurira podatke o postojecem fakultetu")
	@PutMapping("/fakultet")
	public ResponseEntity<HttpStatus> updateFakultet(@RequestBody Fakultet fakultet) {
		if (fakultetRepository.existsById(fakultet.getId())) {
			fakultetRepository.save(fakultet);
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	}
}
