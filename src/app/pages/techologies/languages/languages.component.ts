import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  techLangs = [
    { text: 'Javascript', count: 2556 },
    { text: 'Java', count: 2556 },
    { text: 'Python', count: 2556 },
    { text: 'PHP', count: 2556 },
    { text: 'Javascript', count: 2556 },
    { text: 'Java', count: 2556 },
    { text: 'Python', count: 2556 },
    { text: 'PHP', count: 2556 },
    { text: 'Javascript', count: 2556 },
    { text: 'Java', count: 2556 },
    { text: 'Python', count: 2556 },
    { text: 'PHP', count: 2556 },
    { text: 'Javascript', count: 2556 },
    { text: 'Java', count: 2556 },
    { text: 'Python', count: 2556 },
    { text: 'PHP', count: 2556 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
