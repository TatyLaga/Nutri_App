
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserProvider } from '../user/user';
import 'rxjs/add/operator/switchMap';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class AuthProvider {
  user: any ;

  displayname: string;

  constructor(private _users: UserProvider, public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
			if(user){
        console.log("user Entra como", user);

      }
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
