import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup} from '@angular/forms';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { UserProvider } from '../../providers/user/user';

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
  name:string = "";
  rol:string = "";
  user: any;

   constructor(public navCtrl: NavController, private db: AngularFireDatabase,
    public navParams: NavParams, private auth: AuthProvider, public userProv: UserProvider) {
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
      password: this.password
      };

		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.setRoot(HomePage),
        error => this.loginError = error.message

      );


  }


  forgotPassword(){
    var auth = firebase.auth();

auth.sendPasswordResetEmail(this.email).then(function() {
  alert('Se ha enviado un correo, por favor siga los pasos')
}).catch(function(error) {
  // An error happened.
});

  }
}
