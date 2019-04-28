import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProvreportProvider } from "../../providers/provreport/provreport";
import { LoginPage } from '../login/login';
import { NaranfdaPage } from '../naranfda/naranfda';


/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {
  report: any = {
    nombreR: '',
    celularR: '',
    institucionR: '',
    tipoDocumentoR: '',
    numeroDocumentoR:'',
    ciudadR: '',

    date: '',
    nombreP:'',
    edadP:'',
    emailP:'',
    celularP:'',
    generoP:'',
    pesoP:'',
    estaturaP:'',
    imcP:'',
    antecedentesP:'',
    problemasSaludP:'',
    embarazoP:'',
    trimestreP:'',
    tipoProductoP:'',
    marcaP:'',
    laboratorioP:'',
    registroSanitarioP :'',
    loteP:'',
    fechaVencimientoP:'',
    dosisP:'',
    frecuenciaP:'',
    inicioConsumoP:'',
    finalizaConsumoP:'',
    problemCalidadP:'',
    descripcionProblCalidadP:'',

  }

  today = Date.now();
  deptos: any;
  cie10: any;
  data: string;
  pesoP: number;
  estaturaP: number;
  result: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertController: AlertController,
    public http: Http,
    private afd:AngularFireDatabase,
    public reportProvider : ProvreportProvider,
    private alertCtrl: AlertController) {


    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Report Paciente');
this.getDeptos();
  }

  home(){

  }

  presentAlert(message: string) {
    let alert = this.alertCtrl.create({
      title: 'Reporte',
      subTitle: message,
      buttons: ['Ok']
    });
    alert.present();
  }

  enviarReporte() {
    this.afd.list('Reportes_Paciente/').push(this.report);
    this.presentAlert('Reporte enviado. presione "Ok" para continuar');
    this.navCtrl.push(NaranfdaPage);
  }

  getDeptos(){
    this.http.get('https://www.datos.gov.co/resource/xdk5-pm3f.json').map(
      res => res.json()).subscribe(deptos => {
      this.deptos = deptos;
      console.log(deptos);
      }, err => {

console.log(err);

  });

  }

  imc(){
    var result = this.pesoP/(Math.pow(this.estaturaP, 2));
    var scoreCont = document.getElementById('showResult');
    scoreCont.innerHTML = `IMC = ${result}`;
  }



}
