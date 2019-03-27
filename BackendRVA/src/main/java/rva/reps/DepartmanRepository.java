package rva.reps;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import rva.jpa.Departman;

public interface DepartmanRepository extends JpaRepository<Departman, Integer> {
	public Collection<Departman> findByNazivContainingIgnoreCase(String naziv);
}
