import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fakultet } from 'src/app/models/fakultet';
import { FakultetService } from 'src/app/services/fakultet.service';

@Component({
  selector: 'app-fakultet',
  templateUrl: './fakultet.component.html',
  styleUrls: ['./fakultet.component.css']
})
export class FakultetComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'sediste', 'actions'];
  dataSource: Observable<Fakultet[]>;

  constructor(public fakultetService: FakultetService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataSource = this.fakultetService.getAllFakultet();
  }

}
