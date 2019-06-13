import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Departman } from 'src/app/models/departman';
import { DepartmanService } from 'src/app/services/departman.service';
import { Fakultet } from 'src/app/models/fakultet';
import { DepartmanDialogComponent } from '../dialogs/departman-dialog/departman-dialog.component';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-departman',
  templateUrl: './departman.component.html',
  styleUrls: ['./departman.component.css']
})
export class DepartmanComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'oznaka', 'fakultetBean', 'actions'];
  dataSource: MatTableDataSource<Departman>;
  selektovanDepartman: Departman;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public departmanService: DepartmanService, public dialog: MatDialog) { }


  ngOnInit() {
    this.loadData();
  }

  public loadData() {
      this.departmanService.getDepartmani().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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
  selectRow(row) {
    this.selektovanDepartman = row;
  }

  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }
}
