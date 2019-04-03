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
import rva.jpa.Departman;
import rva.reps.DepartmanRepository;

@Api(tags="Departman CRUD operacije")
@RestController
public class DepartmanRestController {
	@Autowired
	private DepartmanRepository departmanRepository;
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@ApiOperation(value="Vraca kolekciju departmana iz baze podataka")
	@GetMapping("/departman")
	public Collection<Departman> getDepartmani() {
		return departmanRepository.findAll();
	}
	
	@ApiOperation(value="Brise departman sa prosledjenim id-om iz baze podataka")
	@GetMapping("/departman/{id}")
	public Departman getDepartman(@PathVariable Integer id) {
		return departmanRepository.getOne(id);
	}
	
	@ApiOperation(value="Vraca kolekciju departmana iz baze podataka koji sadrze prosledjeni string u svom nazivu")
	@GetMapping("/departmanNaziv/{naziv}")
	public Collection<Departman> getByNaziv(@PathVariable String naziv) {
		return departmanRepository.findByNazivContainingIgnoreCase(naziv);
	}
	
	@ApiOperation(value="Upisuje novi departman u bazu podataka")
	@PostMapping("/departman/")
	public ResponseEntity<Departman> insertDepartman(@RequestBody Departman departman) {
		departmanRepository.save(departman);
		return new ResponseEntity<Departman>(HttpStatus.OK);
	}
	
	@ApiOperation(value="Azurira podatke o postojecem departmanu u bazi podataka")
	@PutMapping("/departman/")
	public ResponseEntity<Departman> updateDepartman(@RequestBody Departman departman) {
		if(departmanRepository.existsById(departman.getId())) {
			departmanRepository.save(departman);
			return new ResponseEntity<Departman>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@ApiOperation(value="Brise departman sa prosledjenim id-om iz baze podataka")
	@Transactional
	@DeleteMapping("/departman/{id}")
	public ResponseEntity<Departman> deleteDepartman(@PathVariable Integer id) {
		if (departmanRepository.existsById(id)) {
			departmanRepository.deleteById(id);
			jdbcTemplate.execute("delete from student where departman=" + id);
			return new ResponseEntity<Departman>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
