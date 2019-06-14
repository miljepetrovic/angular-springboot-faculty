import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  vjestine = ['Java', 'OOP', 'UML', 'SQL', 'Android', 'Spring', 'Angular', 'HTML', 'CSS'];

  constructor() { }

  ngOnInit() {
  }

}
