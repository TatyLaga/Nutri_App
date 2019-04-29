import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Validators } from '@angular/forms';
import { ProvreportProvider } from "../../providers/provreport/provreport";
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the NaranjoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-naranjo',
  templateUrl: 'naranjo.html',
})
export class NaranjoPage {
  naranjo:any = {
    p1: '',
    p2: '',
    p3: '',
    p4: '',
    p5: '',
    p6: '',
    p7: '',
    p8: '',
    p9: '',
    p10: ''
    }
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public reportProvider : ProvreportProvider, private afd:AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NaranjoPage');
  }


  home(){
    this.navCtrl.setRoot(HomePage);
  }

  public analizarAlgoritmo(){

    var score = 0;

    for (var key in this.naranjo) {
      if (!this.naranjo.hasOwnProperty(key)) continue;
      var value = this.naranjo[key];
      if (value) {
        score += parseInt(value);
      }

    }

    this.naranjo.score = score;
    this.reportProvider.addNaranjo(this.naranjo);
    var scoreCont = document.getElementById('showScore');

    if (score >=9) {
      console.log("Probada")
      scoreCont.innerHTML = `Putuación = ${score} : Probada`;
    }
    if (score >= 5 && score <=8) {
      console.log("Probable");
      scoreCont.innerHTML = `Puntuación = ${score} : Probable`;

    }

    if (score >= 1 && score <= 4) {
      console.log("Posible");
      scoreCont.innerHTML = `Puntuación = ${score}  : Posible`;

    }

    if (score <= 0) {
      console.log("Dudosa");
      scoreCont.innerHTML = `Puntuación = ${score}  : Dudosa`;

    }

    scoreCont.classList.remove('hidden');

    this.reportProvider.addNaranjo(this.naranjo);

    }
}
