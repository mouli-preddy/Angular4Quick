import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repo-header',
  templateUrl: './repo-header.component.html',
  styleUrls: ['./repo-header.component.scss']
})
export class RepoHeaderComponent implements OnInit {
  @Input() searchKey: '';

  tabs = [
    { text: 'Repositories', count: '230k' },
    { text: 'Code', count: '130k' },
    { text: 'Commits', count: '40m' },
    { text: 'Issues', count: '30k' },
    { text: 'Wikis', count: '34k' },
    { text: 'Users', count: '1250' }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  searchType(event) {
    if (event.code === 'Enter') {
      this.router.navigate(['/repo/' + this.searchKey]);
    }
  }

}
