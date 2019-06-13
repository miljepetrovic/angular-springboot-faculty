import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Status } from 'src/app/models/status';
import { StatusService } from 'src/app/services/status.service';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { StatusDialogComponent } from '../dialogs/status-dialog/status-dialog.component';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  displayedColumns = ['id', 'naziv', 'oznaka', 'actions'];
  dataSource: MatTableDataSource<Status>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public statusService: StatusService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
      this.statusService.getAllStatus().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  public openDialog(flag: number, id: number, naziv: string, oznaka: string) {
     const dialogRef = this.dialog.open(StatusDialogComponent, {data: {id: id, naziv: naziv, oznaka: oznaka}});

     dialogRef.componentInstance.flag = flag;

     dialogRef.afterClosed().subscribe(result => {
       if (result == 1 ) {
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
