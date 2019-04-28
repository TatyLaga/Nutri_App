import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ReportPage } from '../report/report';
import { NaranjoPage } from '../naranjo/naranjo';
import { FdaPage } from '../fda/fda';
import { HistoricalPage } from '../historical/historical';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserProvider } from '../../providers/user/user';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController,public dbUser: UserProvider ,public afAuth : AngularFireAuth,) {
    this.checkUser = this.checkUser.bind(this);

  }
  ionViewWillEnter(){
    firebase.auth().onAuthStateChanged(this.checkUser);
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

}
