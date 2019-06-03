import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Status } from 'src/app/models/status';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  displayedColumns = ['id', 'naziv', 'oznaka', 'actions'];
  dataSource: Observable<Status[]>;

  constructor(public statusService: StatusService) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
      this.dataSource = this.statusService.getAllStatus();
  }

}
