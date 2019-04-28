import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

/*
  Generated class for the ReporProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReporProvider {
 reports: any = {};
 reportRs: any = {};
  constructor(public http: HttpClient, private _afDB: AngularFireDatabase) {
    console.log('Hello ReporProvider Provider');

  }

  addReport(report:any):void{
    this.reports = this._afDB.list(`/Reporte/`)
    this.reports.push({ report});

  }

}
