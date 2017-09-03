import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RepositoryService {

  constructor(
    public http: Http
  ) { }

  getRepositories(key) {
    return this.http.get('https://api.github.com/search/repositories?q=' + key);
  }

}
