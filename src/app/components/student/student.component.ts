import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Status } from 'src/app/models/status';
import { StatusDialogComponent } from '../dialogs/status-dialog/status-dialog.component';
import { StudentDialogComponent } from '../dialogs/student-dialog/student-dialog.component';
import { Departman } from 'src/app/models/departman';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  displayedColumns = ['id', 'ime', 'prezime', 'brojIndeksa', 'statusBean', 'departmanBean', 'actions'];
  dataSource: MatTableDataSource<Student>;
  @Input() selektovanDepartman: Departman;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public studentService: StudentService, public dialog: MatDialog) { }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.selektovanDepartman.id) {
      this.loadData();
    }
  }

  public loadData() {
    this.studentService.getStudentiPoDepartmanu(this.selektovanDepartman.id).subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public openDialog(flag: number, id: number, ime:string, prezime: string, brojIndeksa: string, statusBean: Status, departmanBean: Departman) {
    const dialogRef = this.dialog.open(StudentDialogComponent, {data: {id: id, ime: ime, prezime: prezime, brojIndeksa: brojIndeksa, statusBean: statusBean, departmanBean: departmanBean}});
    console.log("objekat? " + status);
    dialogRef.componentInstance.flag = flag;

    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
        this.loadData();
      }
    })
  }

  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }
}
