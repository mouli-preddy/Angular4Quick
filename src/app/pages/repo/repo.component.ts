import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { RepositoryService } from '../../services/repository.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {
  data = null;
  key = '';

  constructor(
    private route: ActivatedRoute,
    public repo: RepositoryService,
    private http: Http
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.key = params.key;
      this.getData(params.key);
    });
  }

  private getData(key) {
    this.http.get('https://api.github.com/search/repositories?q=' + key).subscribe(data => {
      this.data = data.json();
      console.log(this.data);
    }, err => {
      console.log('error while getting repositories.');
    });
  }

}
