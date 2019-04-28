import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NaranjoPage } from '../naranjo/naranjo';
import { FdaPage } from '../fda/fda';

/**
 * Generated class for the NaranfdaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-naranfda',
  templateUrl: 'naranfda.html',
})
export class NaranfdaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NaranfdaPage');
  }

  naranjo(){
    this.navCtrl.setRoot(NaranjoPage);
  }

  fda(){
    this.navCtrl.setRoot(FdaPage);
  }

}
