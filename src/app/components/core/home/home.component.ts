import { Component, OnInit } from '@angular/core';
export interface Tile {
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  tiles: Tile[] = [
    {text: 'https://angular.io/assets/images/logos/angular/angular.svg', cols: 3, rows: 1 },
    {text: 'Two', cols: 1, rows: 2 },
    {text: 'Three', cols: 1, rows: 1 },
    {text: 'Four', cols: 2, rows: 1 },
  ];
  constructor() { }

  ngOnInit() {
  }


}
