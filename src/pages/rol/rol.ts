import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Home2Page } from '../home2/home2';


/**
 * Generated class for the RolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rol',
  templateUrl: 'rol.html',
})
export class RolPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RolPage');
  }

  home(){
    this.navCtrl.setRoot(HomePage)
  }

  home2(){
    this.navCtrl.setRoot(Home2Page)
  }


}
