import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the FdaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fda',
  templateUrl: 'fda.html',
})
export class FdaPage {
  fda: any = {
    p1 : " ",
    p2 : " ",
    p3: " ",
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FdaPage');
  }

  home(){
    this.navCtrl.setRoot(HomePage);
  }

  algoFDA(){

    for (var key in this.fda) {
      if (!this.fda.hasOwnProperty(key)) continue;
        var value = this.fda[key];

        if (value) {

          //Resultado Dudosa
          while (this.fda.p1 == 0 && this.fda.p2 == 1 && this.fda.p3  == 0) {
          var score =  document.getElementById("showScore").innerHTML ;
          score = "Dudosa";
            break;
          }

          while (this.fda.p1 == 0 && this.fda.p2 == 0 && this.fda.p3  == 1) {
            document.getElementById("showScore").innerHTML = "Dudosa";
            break;
          }

          while (this.fda.p1 == 0 && this.fda.p2 == 0 && this.fda.p3  == 0) {
            document.getElementById("showScore").innerHTML = "Dudosa";
            break;
          }

          while (this.fda.p1 == 0 && this.fda.p2 == 1 && this.fda.p3  == 1) {
           document.getElementById("showScore").innerHTML = "Dudosa";
            break;
          }

          //Resultado Posible
          while (this.fda.p1 == 1 && this.fda.p2 == 0 && this.fda.p3  == 0) {
            document.getElementById("showScore").innerHTML = "Posible";
            break;
          }

          while (this.fda.p1 == 1 && this.fda.p2 == 0 && this.fda.p3  == 1) {
           document.getElementById("showScore").innerHTML = "Posible";
            break;
          }

          //Resultado Probable

          while (this.fda.p1 == 1 && this.fda.p2 == 1 && this.fda.p3  == 0) {
            document.getElementById("showScore").innerHTML = "Probable";
            break;
          }

          //Resultado Probada
          while (this.fda.p1 == 1 && this.fda.p2 == 1 && this.fda.p3  == 1) {
            document.getElementById("showScore").innerHTML = "Probada";
            break;
          }



        }
      }
    }

}
