import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { ProvreportProvider } from '../../providers/provreport/provreport';
import * as firebase from 'firebase';
import { AngularFireDatabase, RealtimeDatabaseURL } from 'angularfire2/database';
import { Observable } from 'rxjs'
import { Http } from '@angular/http';
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
  reports: any;
  objectKeys = Object.keys;
  userRepor:any;






  constructor(public navCtrl: NavController,
    private db: AngularFireDatabase, public http: Http,
    public navParams: NavParams, public ProvReport: ProvreportProvider) {

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoricalPage');

this.consul();
this.showUserData();
this.userData();
this.dataTry()


  }

  /*consulta(){
    const rootRef = firebase.database().ref();
    const oneRef = rootRef.child('Reportes_Paciente')
    const twoRef = rootRef.child('Reportes_Paciente').orderByChild('email').equalTo('adminp@admin.com')
    console.log(oneRef.orderByValue);
  }*/

  consul(){
    this.db.object('/Reports').valueChanges().subscribe((datas) => {
      console.log("datas Loquis", datas)

      this.reports = datas;

      console.log("arry Report", this.reports);

       const mapped = Object.keys(this.reports).map(key => ({type: key, value: this.reports[key]}));
       console.log("Hola mapedss",mapped);
       this.reports = mapped;


    },(err)=>{
       console.log("probleme : ", err)
    });
  }

showUserData(){
  var user = firebase.auth().currentUser;
  if (user != null) {
    user.providerData.forEach(function (profile) {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });
}
}

userData(){
  this.db.object('/users').valueChanges().subscribe((datas) => {
    console.log("datas", datas)
    const mapped = Object.keys(datas).map(key => ({type: key, value: datas[key]}));
    console.log("Hola maped",mapped);
    this.users = mapped;

    var show = document.getElementById("showData")
    show.innerHTML = `ok ${this.users}`

  },(err)=>{
     console.log("probleme : ", err)
  });
}

dataTry(){

  var myUserId = firebase.auth().currentUser.uid;
var topUserPostsRef = firebase.database().ref('user/' + myUserId).orderByChild('uid');
console.log("muestra", topUserPostsRef);

}

  home(){
    this.navCtrl.setRoot(HomePage);
  }



}

