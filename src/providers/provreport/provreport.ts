
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
fdas: any ={};
userId : string;
itemId:string;
  constructor(private _afDB: AngularFireDatabase,private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user =>{
      if (user) this.userId = user.uid
    })
    }

  addReport(report:any): void {
    if(!this.userId) return;
    this.reports.userId = this.userId

    this.reports = this._afDB.list(`/Reports/${this.userId}/user_Reports`);
    return this.reports.push({ report});
}

addNaranjo(naranjo: any): void {

  this.naranjos.userId = this.userId

  this.naranjos = this._afDB.list(`/Reports/${this.userId}/algoritmo_Naranjos`);
  return this.naranjos.push({ naranjo});
}

addFDA(fda: any) : void{

  this.fdas.userId = this.userId

  this.fdas = this._afDB.list(`/Reports/${this.userId}/Algoritmo_FDAs`);
  return this.fdas.push({ fda});
}

  getReportList() {
    if(!this.userId) return;
    this.reports = this._afDB.list(`/Reports`);
    return this.reports
}

updateReport(report: any) {
  return this.reports.update(report.key, report);
}

}
