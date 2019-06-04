import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Fakultet } from 'src/app/models/fakultet';
import { FakultetService } from 'src/app/services/fakultet.service';

@Component({
  selector: 'app-fakultet-dialog',
  templateUrl: './fakultet-dialog.component.html',
  styleUrls: ['./fakultet-dialog.component.css']
})
export class FakultetDialogComponent implements OnInit {
  public flag: number;

  constructor(public snackBar:  MatSnackBar, public dialogRef: MatDialogRef<FakultetDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Fakultet, public fakultetService: FakultetService) { }

  ngOnInit() {
  }

  public add(): void {
    this.fakultetService.addFakultet(this.data);
    this.snackBar.open("Uspjesno dodat fakultet: " + this.data.naziv, "U redu", {duration: 2000});
  }

  public update(): void {
    this.fakultetService.updateFakultet(this.data);
    this.snackBar.open("Uspjesno modifikovan fakultet: " + this.data.naziv, "U redu", {duration: 2000});
  }

  public delete(): void {
    this.fakultetService.deleteFakultet(this.data.id);
    this.snackBar.open("Uspjesno obrisan fakultet: " + this.data.naziv, "U redu", {duration: 2000});
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", {duration: 1000});
  }

}
