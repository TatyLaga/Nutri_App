import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup} from '@angular/forms';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  validations_form: FormGroup;
  errorMessage: string = '';
  email:string = "";
  password:string = "";
  loginError: string;
  name= '';

   constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider) {
  //get name
  this.name = navParams.get('nameU');
  }

  ionViewDidLoad() {
    console.log('LoginPage');

  }


  register(){
    this.navCtrl.setRoot(RegisterPage);
  }

  login() {

		let credentials = {
			email: this.email,
      password: this.password,
      };

		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.setRoot(HomePage),
				error => this.loginError = error.message
			);
  }

}
