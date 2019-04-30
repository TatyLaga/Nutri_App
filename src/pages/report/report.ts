import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProvreportProvider } from "../../providers/provreport/provreport";
import { NaranfdaPage } from '../naranfda/naranfda';
import { HomePage } from '../home/home';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { storage } from 'firebase';



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
  captureDataUrl: string;

  textoBuscar = '';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertController: AlertController,
    public http: Http,
    private afd:AngularFireDatabase,
    public reportProvider : ProvreportProvider,
    private alertCtrl: AlertController,
    private camera: Camera) {


    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Report Paciente');
this.getDeptos();
  }

  home(){
    this.navCtrl.setRoot(HomePage);
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
    this.reportProvider.addReport(this.report);
    this.presentAlert('Reporte enviado. presione "Ok" para continuar');
    this.navCtrl.push(NaranfdaPage);
  }

  envi(){
    this.navCtrl.push(NaranfdaPage);
  }

  getDeptos(){
    this.http.get('https://www.datos.gov.co/resource/xdk5-pm3f.json').map(
      res => res.json()).subscribe(deptos => {
      this.deptos = deptos;

      }, err => {

console.log(err);

  });

  }

  imc(){

     console.log(this.report.pesoP);
     console.log(this.report.pesoP);

     var result = (this.report.pesoP/(Math.pow(this.report.estaturaP/100, 2))).toFixed(1);
    var scoreCont = document.getElementById('showResult');

    console.log(result);

if (result < 18.5.toString()) {
  scoreCont.innerHTML = `IMC = ${result}: Inferior al Normal`;
}

if (result >= 18.5.toString() && result <= 24.9.toString()) {
  scoreCont.innerHTML = `IMC = ${result}: Normal`;
}

if (result >= 25.0.toString() && result <= 29.9.toString()) {
  scoreCont.innerHTML = `IMC = ${result}: Superior al Normal`;
}

if (result > 30.0.toString()) {
  scoreCont.innerHTML = `IMC = ${result}: Obesidad`;
}

  }

buscar(event){
 this.textoBuscar = event.value;

}

async capture() {
  //setup camera options
  try{
    const cameraOptions: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
   const result = await this.camera.getPicture(cameraOptions)
    const image = `data:image/jpeg;base64,${result}`;
    const pictures = storage().ref('pictures')
    pictures.putString(image, 'data_url');
  }
  catch(e){
    console.error(e);
  }

}


}
