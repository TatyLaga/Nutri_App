import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ReportPage } from '../report/report';
import { NaranjoPage } from '../naranjo/naranjo';
import { FdaPage } from '../fda/fda';
import { HistoricalPage } from '../historical/historical';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController) {

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
