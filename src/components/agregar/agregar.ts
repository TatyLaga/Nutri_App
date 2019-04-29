import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the AgregarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'agregar',
  templateUrl: 'agregar.html'
})
export class AgregarComponent {

  form: FormGroup;
  text: string;

  constructor(private service:UserProvider,
    private fb: FormBuilder) {

  }

  ngOnInit(){

  }

}
