import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Status } from 'src/app/models/status';
import { StatusService } from 'src/app/services/status.service';
import { MatDialog } from '@angular/material';
import { StatusDialogComponent } from '../dialogs/status-dialog/status-dialog.component';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  displayedColumns = ['id', 'naziv', 'oznaka', 'actions'];
  dataSource: Observable<Status[]>;

  constructor(public statusService: StatusService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
      this.dataSource = this.statusService.getAllStatus();
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

}
