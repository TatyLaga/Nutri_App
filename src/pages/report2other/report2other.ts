import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { NaranfdaPage } from '../naranfda/naranfda';
import { Http } from '@angular/http';
/**
 * Generated class for the Report2otherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report2other',
  templateUrl: 'report2other.html',
})
export class Report2otherPage {
  cie10: any;
  today = Date.now();
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http, public alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Report Medico');
    this.getCie10();
  }

  home(){
    this.navCtrl.setRoot(HomePage);
  }

  async enviar() {
    const alert = await this.alertController.create({
      message: 'Reporte Enviado',
      buttons: ['OK']
    });

    await alert.present();
    this.navCtrl.setRoot(NaranfdaPage);
  }

  getCie10(){
    this.http.get('https://raw.githubusercontent.com/cayasso/cie10/master/cie10-array.json').map(
      res => res.json()).subscribe(cie10 => {
      this.cie10 = cie10;
      console.log(cie10);
      }, err => {

console.log(err);

  });

  }

}
