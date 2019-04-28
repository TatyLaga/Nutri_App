import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

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

  validation_messages = {
   'email': [
     { type: 'required', message: 'Correo es requerido' },
     { type: 'pattern', message: 'Por favor ingrese un correo válido' }
   ],
   'password': [
     { type: 'required', message: 'Contraseña requerida' },
     { type: 'minlength', message: 'La contraseña debe tener más de 5 caracteres' }
   ]
 };

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,) {
  }

  ionViewDidLoad() {
    console.log('LoginPage');
  }

  login(){
    this.navCtrl.setRoot(HomePage);
  }

  register(){
    this.navCtrl.setRoot(RegisterPage);
  }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }

}
