
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  private user: firebase.User;
  constructor( public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
			this.user = user;
		});
  }

  signInWithEmail(credentials) {

		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }
}
