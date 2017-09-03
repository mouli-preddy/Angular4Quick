import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  techLangSelected(tech) {
    this.router.navigate(['/repo/' + tech.text]);
  }

}
