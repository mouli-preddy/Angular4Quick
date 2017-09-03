import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-techologies',
  templateUrl: './techologies.component.html',
  styleUrls: ['./techologies.component.scss']
})
export class TechologiesComponent implements OnInit {
  techs = [
    { text: 'Javascript', logo: 'assets/images/javascript.png', count: 2556 },
    { text: 'Java', logo: 'assets/images/java.png', count: 2556 },
    { text: 'Python', logo: 'assets/images/python.png', count: 2556 },
    { text: 'PHP', logo: 'assets/images/php.png', count: 2556 }
  ];
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

  techLangSelected(tech) {
    console.log('lang selected is ', tech);
  }

}
