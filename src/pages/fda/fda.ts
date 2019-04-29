import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProvreportProvider } from '../../providers/provreport/provreport';
import { AngularFireDatabase } from 'angularfire2/database';
import { NaranfdaPage } from '../naranfda/naranfda';

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
  constructor(public navCtrl: NavController,
    public navParams: NavParams, public reportProvider : ProvreportProvider,
    private afd:AngularFireDatabase,  private alertCtrl: AlertController) {
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
          var score =  document.getElementById("showScore")
          score.innerHTML = "Dudosa" ;
          this.reportProvider.addFDA(score);
            break;
          }

          while (this.fda.p1 == 0 && this.fda.p2 == 0 && this.fda.p3  == 1) {
            var score =  document.getElementById("showScore")
          score.innerHTML = "Dudosa" ;
          this.reportProvider.addFDA(score);
            break;
          }

          while (this.fda.p1 == 0 && this.fda.p2 == 0 && this.fda.p3  == 0) {
            //document.getElementById("showScore").innerHTML = "Dudosa";
            var score =  document.getElementById("showScore")
          score.innerHTML = "Dudosa" ;
          this.reportProvider.addFDA(score);
            break;
          }

          while (this.fda.p1 == 0 && this.fda.p2 == 1 && this.fda.p3  == 1) {
            var score =  document.getElementById("showScore")
            score.innerHTML = "Dudosa" ;
            this.reportProvider.addFDA(score);
            break;
          }

          //Resultado Posible
          while (this.fda.p1 == 1 && this.fda.p2 == 0 && this.fda.p3  == 0) {
            var score =  document.getElementById("showScore")
            score.innerHTML = "Posible" ;
            this.reportProvider.addFDA(score);
            break;
          }

          while (this.fda.p1 == 1 && this.fda.p2 == 0 && this.fda.p3  == 1) {
            var score =  document.getElementById("showScore")
            score.innerHTML = "Posible" ;
            this.reportProvider.addFDA(score);
            break;
          }

          //Resultado Probable

          while (this.fda.p1 == 1 && this.fda.p2 == 1 && this.fda.p3  == 0) {
            var score =  document.getElementById("showScore")
            score.innerHTML = "Probable" ;
            this.reportProvider.addFDA(score);
            break;
          }

          //Resultado Probada
          while (this.fda.p1 == 1 && this.fda.p2 == 1 && this.fda.p3  == 1) {
            var score =  document.getElementById("showScore")
            score.innerHTML = "Probable" ;
            this.reportProvider.addFDA(score);
            break;
          }

          this.reportProvider.addFDA(score);


        }
      }
      this.reportProvider.addFDA(this.fda);

    }


}
