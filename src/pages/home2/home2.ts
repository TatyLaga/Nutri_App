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
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { RegisterPage } from "../register/register";
import { Report2otherPage } from '../report2other/report2other';

/**
 * Generated class for the Home2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html',
})
export class Home2Page {

  @ViewChild(Slides) slides: Slides;

  reportData : any;
  repDatas: any;
  items: Array<any>;
  name: Array<any>;
  age: Array<any>;
  users: Observable<RegisterPage[]>;
  profileData: AngularFireObject<any>;
  user = {};
  profile = {};

  constructor(public navCtrl: NavController,
    public dbUser: UserProvider ,public afAuth : AngularFireAuth,
    public navParams: NavParams,
    public http: Http,
    public af: AngularFireDatabase, public userProv: UserProvider) {
    this.checkUser = this.checkUser.bind(this);
    //get name
    this.name=navParams.get('nameU');
  }
  ionViewWillEnter(){
    firebase.auth().onAuthStateChanged(this.checkUser);
    this.getUserFirstName();
    console.log('The Users first name is ' + this.getUserFirstName());
  }

  checkUser(user) {
    if (!user) {
     console.log("user is not logged in");
     console.log("user isot logged ot logged in");
     this.navCtrl.push(LoginPage);
   } else {

     console.log("user is logged in");
     console.log("user is logged in" + user.email);
     var nameMail = document.getElementById('correo')
     nameMail.innerHTML = `Bienvenido ${user.email}!`
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
    this.navCtrl.setRoot(Report2otherPage);
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
    this.navCtrl.setRoot(Home2Page);
  }

  getCurrentUser() {
    this.afAuth.authState.subscribe(data => {
      console.log('info ' + data.displayName);
      return data.uid;
    });

    this.userProv.getUser().valueChanges().subscribe((data)=>{
      console.log("datas Loquis", data)
    })
  }
  getUserFirstName() {
    this.profileData = this.af.object(`users/` + this.getCurrentUser());
    return this.profileData;
  }

}
