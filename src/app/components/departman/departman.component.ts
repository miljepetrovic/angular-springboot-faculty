import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Departman } from 'src/app/models/departman';
import { DepartmanService } from 'src/app/services/departman.service';

@Component({
  selector: 'app-departman',
  templateUrl: './departman.component.html',
  styleUrls: ['./departman.component.css']
})
export class DepartmanComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'oznaka', 'fakultetBean', 'actions'];
  dataSource: Observable<Departman[]>;

  constructor(public departmanService: DepartmanService) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.dataSource = this.departmanService.getDepartmani();
  }

}
