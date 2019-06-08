import { Component, OnInit, Inject, Input } from '@angular/core';
import { Fakultet } from 'src/app/models/fakultet';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DepartmanService } from 'src/app/services/departman.service';
import { FakultetService } from 'src/app/services/fakultet.service';
import { Departman } from 'src/app/models/departman';

@Component({
  selector: 'app-departman-dialog',
  templateUrl: './departman-dialog.component.html',
  styleUrls: ['./departman-dialog.component.css']
})
export class DepartmanDialogComponent implements OnInit {

  public flag: number;
  public fakulteti: Fakultet[];

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<DepartmanDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Departman,
              public departmanService: DepartmanService,
              public fakultetService: FakultetService) { }

  ngOnInit() {
    this.fakultetService.getAllFakultet().subscribe(fakulteti =>
        this.fakulteti = fakulteti
      );
    }

  compareTo(a, b) {
    return a.id == b.id;
  }

  onChange(fakultet) {
    this.data.fakultet = fakultet;
  }

  public add(): void {
    this.departmanService.addDepartman(this.data);
    this.snackBar.open("Uspešno dodat departman", "U redu", { duration: 2500 });

  }
  public update(): void {
    this.departmanService.updateDepartman(this.data);
    this.snackBar.open("Uspešno modifikovan departman", "U redu", {duration: 2500});
  }
  public delete(): void {
    this.departmanService.deleteDepartman(this.data.id);
    this.snackBar.open("Uspešno obrisan departman", "U redu", {duration: 1000});
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", { duration: 1000 });
  }
}
