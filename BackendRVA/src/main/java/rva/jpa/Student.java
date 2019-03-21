package rva.jpa;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;


/**
 * The persistent class for the student database table.
 * 
 */
@Entity
@NamedQuery(name="Student.findAll", query="SELECT s FROM Student s")
public class Student implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name="STUDENT_ID_GENERATOR", sequenceName="STUDENT_SEQ", allocationSize = 1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="STUDENT_ID_GENERATOR")
	private Integer id;

	@Column(name="broj_indeksa")
	private String brojIndeksa;

	private String ime;

	private String prezime;

	
	//bi-directional many-to-one association to Departman
	@ManyToOne
	@JoinColumn(name="departman")
	private Departman departmanBean;

	//bi-directional many-to-one association to Status
	@ManyToOne
	@JoinColumn(name="status")
	private Status statusBean;

	public Student() {
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getBrojIndeksa() {
		return this.brojIndeksa;
	}

	public void setBrojIndeksa(String brojIndeksa) {
		this.brojIndeksa = brojIndeksa;
	}

	public String getIme() {
		return this.ime;
	}

	public void setIme(String ime) {
		this.ime = ime;
	}

	public String getPrezime() {
		return this.prezime;
	}

	public void setPrezime(String prezime) {
		this.prezime = prezime;
	}

	public Departman getDepartmanBean() {
		return this.departmanBean;
	}

	public void setDepartmanBean(Departman departmanBean) {
		this.departmanBean = departmanBean;
	}

	public Status getStatusBean() {
		return this.statusBean;
	}

	public void setStatusBean(Status statusBean) {
		this.statusBean = statusBean;
	}

}