package rva.reps;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import rva.jpa.Departman;
import rva.jpa.Status;
import rva.jpa.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {
	public Collection<Student> findByDepartmanBean(Departman departman);
	public Collection<Student> findByStatusBean(Status status);
}
