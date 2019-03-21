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
import org.springframework.web.bind.annotation.RestController;

import rva.jpa.Fakultet;
import rva.reps.FakultetRepository;

@RestController
public class FakultetRestController {
	
	@Autowired
	private FakultetRepository fakultetRepository;
	
	@GetMapping("/fakultet")
	public Collection<Fakultet> getFakulteti() {
		return fakultetRepository.findAll();
	}
	
	@GetMapping("/fakultet/{id}")
	public Fakultet getFakultet(@PathVariable Integer id) {
		return fakultetRepository.getOne(id);
	}
	
	@GetMapping("/fakultetNaziv/{naziv}")
	public Collection<Fakultet> getByNaziv(@PathVariable String naziv) {
		return fakultetRepository.findByNazivContainingIgnoreCase(naziv);
	}
	
	@DeleteMapping("/fakultet/{id}")
	public ResponseEntity<HttpStatus> deleteFakultet(@PathVariable Integer id) {
		if (fakultetRepository.existsById(id)) {
			fakultetRepository.deleteById(id);
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	}
	
	@PostMapping("/fakultet/{fakultet}")
	public ResponseEntity<HttpStatus> insertFakultet(@PathVariable Fakultet fakultet) {
		fakultetRepository.save(fakultet);
		return new ResponseEntity<HttpStatus>(HttpStatus.OK);
	}
	
	@PutMapping("/fakultet/{fakultet}")
	public ResponseEntity<HttpStatus> updateFakultet(@PathVariable Fakultet fakultet) {
		if (fakultetRepository.existsById(fakultet.getId())) {
			fakultetRepository.save(fakultet);
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	}
}
