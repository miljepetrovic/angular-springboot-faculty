import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Departman } from 'src/app/models/departman';
import { DepartmanService } from 'src/app/services/departman.service';
import { Fakultet } from 'src/app/models/fakultet';
import { DepartmanDialogComponent } from '../dialogs/departman-dialog/departman-dialog.component';
import { MatDialog, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-departman',
  templateUrl: './departman.component.html',
  styleUrls: ['./departman.component.css']
})
export class DepartmanComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'oznaka', 'fakultetBean', 'actions'];
  dataSource: MatTableDataSource<Departman>;

  constructor(public departmanService: DepartmanService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.departmanService.getDepartmani().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
}

  openDialog(flag: number, id: number, oznaka: string, naziv: string, fakultetBean: Fakultet) {
    const dialogRef = this.dialog.open(DepartmanDialogComponent, {data: {id: id, oznaka: oznaka, naziv: naziv, fakultetBean: fakultetBean}});
    dialogRef.componentInstance.flag = flag;

    dialogRef.afterClosed().subscribe(result => {
      if (result == 1)
      this.loadData();
    });
  }

}
