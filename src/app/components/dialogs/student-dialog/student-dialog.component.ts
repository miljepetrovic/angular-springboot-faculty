import { Component, OnInit, Inject, Input } from '@angular/core';
import { Status } from 'src/app/models/status';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StudentService } from 'src/app/services/student.service';
import { StatusService } from 'src/app/services/status.service';
import { StatusDialogComponent } from '../status-dialog/status-dialog.component';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css']
})
export class StudentDialogComponent implements OnInit {
  public flag: number;
  statusi: Status[];
  constructor(public snackBar: MatSnackBar,
              public studentService: StudentService,
              public statusService: StatusService,
              public dialogRef: MatDialogRef<StatusDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Student) { }

  ngOnInit() {
    this.statusService.getAllStatus().subscribe(statusi =>
      {
        this.statusi = statusi;
      });
  }

  compareTo(a, b) {
    return a.id == b.id;
  }

  onChange(status) {
    this.data.status = status;
  }

  public add(): void {
    this.studentService.addStudent(this.data);
    this.snackBar.open("Uspješno upisan student", "U redu", { duration: 2500 });
  }

  public delete(): void {
    this.studentService.deleteStudent(this.data.id);
    this.snackBar.open("Uspješno obrisan student", "U redu", { duration: 2000 });
  }

  public update(): void {
    this.studentService.updateStudent(this.data);
    this.snackBar.open("Uspješno modifikovan student", "U redu", { duration: 2500 });

  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", { duration: 1000 });
  }

}
