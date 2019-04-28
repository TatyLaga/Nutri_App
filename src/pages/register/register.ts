import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ProvregisterProvider } from '../../providers/provregister/provregister';
import { UserProvider } from '../../providers/user/user';
import { ValueTransformer } from '@angular/compiler/src/util';



/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  password: string = "";
user: any = {
              name : '',
              rol : '',
              email: '',
            };


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
     private toastCtrl: ToastController,
    private _register: ProvregisterProvider,
    private _users: UserProvider,
    private alertCtrl: AlertController,) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  login(){
    this.navCtrl.setRoot(LoginPage);
  }

  presentAlert(message: string) {
    let alert = this.alertCtrl.create({
      title: 'Registro',
      subTitle: message,
      buttons: ['Ok']
    });
    alert.present();
  }

  register() {
    this._users.addUser(this.user);
    this._register.registerEmailAndPassword(this.user.email, this.user.password);
    console.log("Usuario guardado");
    this.presentAlert('Usuario Registrado');

  }

}


