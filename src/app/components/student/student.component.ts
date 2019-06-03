import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  displayedColumns = ['id', 'ime', 'prezime', 'brojIndeksa', 'statusBean', 'actions'];
  dataSource: Observable<Student[]>;
  constructor(public studentService: StudentService) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.dataSource = this.studentService.getStudenti();
  }

}
