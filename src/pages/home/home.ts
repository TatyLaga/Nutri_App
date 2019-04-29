import { Component, ViewChild} from '@angular/core';
import { NavController, Slides, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ReportPage } from '../report/report';
import { NaranjoPage } from '../naranjo/naranjo';
import { FdaPage } from '../fda/fda';
import { HistoricalPage } from '../historical/historical';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserProvider } from '../../providers/user/user';
import { Http } from '@angular/http';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  name= '';
  reportData : any;
  repDatas: any;
  constructor(public navCtrl: NavController,
    public dbUser: UserProvider ,public afAuth : AngularFireAuth,
    public navParams: NavParams,
    public http: Http) {
    this.checkUser = this.checkUser.bind(this);
    //get name
    this.name=navParams.get('nameU');
  }
  ionViewWillEnter(){
    firebase.auth().onAuthStateChanged(this.checkUser);
    this.getReport();
  }

  checkUser(user) {
    if (!user) {
     console.log("user is not logged in");
     console.log("user isot logged ot logged in");
     this.navCtrl.push(LoginPage);
   } else {

     console.log("user is logged in");
     console.log("user is logged in" + user.email);
     return;

   }

 }

 logOut() {
   firebase.auth().signOut().then(()=>{
     this.navCtrl.setRoot(LoginPage);
   });
 }


  login(){
    this.navCtrl.setRoot(LoginPage);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();

  }

  report(){
    this.navCtrl.setRoot(ReportPage);
  }

  naranjo(){
    this.navCtrl.setRoot(NaranjoPage);
  }

  fda(){
    this.navCtrl.setRoot(FdaPage);
  }

  historical(){
    this.navCtrl.setRoot(HistoricalPage);
  }

  home(){
    this.navCtrl.setRoot(HomePage);
  }


  //get data
  getReport(){
    firebase.database().ref().child("user").on('value', function(snapshot) {
      snapshot.forEach(function(child) {
      var datas = child.val();
      var name=child.val().name;
      var rol=child.val().rol;
      var email=child.val().email;
      console.log(name);
      console.log(rol);
      console.log(email);


        });
      });
  }


}
