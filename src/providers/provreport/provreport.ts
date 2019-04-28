
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from '@angular/fire/auth';


/*
  Generated class for the ProvreportProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvreportProvider {

reports: any ={};
naranjos: any ={};
userId : string;
  constructor(private _afDB: AngularFireDatabase,private afAuth: AngularFireAuth) {
    console.log('Hello ProvreportProvider Provider');
  }

  addReport(report: any) {
    if(!this.userId) return;
    this.reports = this._afDB.list(`/Reportes_Paciente/${this.userId}`);
    return this.reports.push({ report});
}

addNaranjo(naranjo: any) {
  if(!this.userId) return;
  this.naranjos = this._afDB.list(`/Reportes_Paciente/${this.userId}/Algoritmo_Naranjo`);
  return this.naranjos.push({ naranjo});
}

  getReportList() {
    return this.reports;
}

updateReport(report: any) {
  return this.reports.update(report.key, report);
}

}
