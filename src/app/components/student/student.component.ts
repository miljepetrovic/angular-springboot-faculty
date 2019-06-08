import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student';
import { MatDialog } from '@angular/material';
import { Status } from 'src/app/models/status';
import { StatusDialogComponent } from '../dialogs/status-dialog/status-dialog.component';
import { StudentDialogComponent } from '../dialogs/student-dialog/student-dialog.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  displayedColumns = ['id', 'ime', 'prezime', 'brojIndeksa', 'statusBean', 'actions'];
  dataSource: Observable<Student[]>;
  constructor(public studentService: StudentService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.dataSource = this.studentService.getStudenti();
  }

  public openDialog(flag: number, id: number, ime:string, prezime: string, brojIndeksa: string, status: Status) {
    const dialogRef = this.dialog.open(StudentDialogComponent, {data: {id: id, ime: ime, prezime: prezime, brojIndeksa: brojIndeksa, status: status}});
    console.log("objekat? " + status);
    dialogRef.componentInstance.flag = flag;

    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
        this.loadData();
      }
    })
  }

}
