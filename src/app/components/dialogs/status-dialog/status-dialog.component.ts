import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Status } from 'src/app/models/status';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-status-dialog',
  templateUrl: './status-dialog.component.html',
  styleUrls: ['./status-dialog.component.css']
})
export class StatusDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar, public dialogRef: MatDialogRef<StatusDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Status, public statusService: StatusService) { }

  ngOnInit() {
  }

  public add() {
    this.statusService.addStatus(this.data);
    this.snackBar.open("Uspešno dodat status: " + this.data.naziv,
    "U redu",
    {duration: 2000});
  }

  public update() {
    this.statusService.updateStatus(this.data);
    this.snackBar.open("Uspešno modifikovan status: " + this.data.naziv,
    "U redu",
    {duration: 2000});
  }

  public delete() {
    this.statusService.deleteStatus(this.data.id);
    this.snackBar.open("Uspešno obrisan status: " + this.data.id,
    "U redu",
    {duration: 2000});
  }

  public cancel() {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", {
      duration: 1000,
    });
  }

}
