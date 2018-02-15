import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
    apiUrl = 'http://www.warungsatekamu.org/wp-json/wp/v2';
  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  getPosts() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/posts/?_embed').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
