import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fakultet } from 'src/app/models/fakultet';
import { FakultetService } from 'src/app/services/fakultet.service';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { FakultetDialogComponent } from '../dialogs/fakultet-dialog/fakultet-dialog.component';

@Component({
  selector: 'app-fakultet',
  templateUrl: './fakultet.component.html',
  styleUrls: ['./fakultet.component.css']
})
export class FakultetComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'sediste', 'actions'];
  dataSource: MatTableDataSource<Fakultet>;

  constructor(public fakultetService: FakultetService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.fakultetService.getAllFakultet().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
}

  openDialog(flag: number, id: number, naziv: string, sediste: string) {
      const dialogRef = this.dialog.open(FakultetDialogComponent, {data: {id: id, naziv: naziv, sediste: sediste}});

      dialogRef.componentInstance.flag = flag;
      dialogRef.afterClosed().subscribe(result => {
        if (result == 1) {
          this.loadData();
        }
      })
  }
}
