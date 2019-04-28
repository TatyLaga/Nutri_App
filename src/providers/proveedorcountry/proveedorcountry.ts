import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProveedorcountryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProveedorcountryProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProveedorcountryProvider Provider');
  }
  getApiCountry()
  {
    return this.http.get('https://www.datos.gov.co/resource/xdk5-pm3f.json');
  }
}
