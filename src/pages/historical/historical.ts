import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { ProvreportProvider } from '../../providers/provreport/provreport';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the HistoricalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historical',
  templateUrl: 'historical.html',
})
export class HistoricalPage {
  data = this.ProvReport.getReportList;

  users: any;


  constructor(public navCtrl: NavController,
    private db: AngularFireDatabase, public navParams: NavParams, public ProvReport: ProvreportProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoricalPage');

this.consul();


  }

  /*consulta(){
    const rootRef = firebase.database().ref();
    const oneRef = rootRef.child('Reportes_Paciente')
    const twoRef = rootRef.child('Reportes_Paciente').orderByChild('email').equalTo('adminp@admin.com')
    console.log(oneRef.orderByValue);
  }*/

  consul(){
    this.db.object('/users').valueChanges().subscribe((datas) => {
      console.log("datas", datas)
      this.users = datas;
    },(err)=>{
       console.log("probleme : ", err)
    });




  }




  home(){
    this.navCtrl.setRoot(HomePage);
  }


}
