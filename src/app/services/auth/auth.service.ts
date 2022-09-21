import { Injectable } from '@angular/core';
import {Auth,signInWithPopup, GoogleAuthProvider} from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';



@Injectable({
  providedIn: 'root'
  
})
export class AuthService {
  userData:any;


  constructor(private auth: Auth,
    private afAuth: AngularFireAuth
    ) { }

  ingresaConGoogle(){

    return signInWithPopup(this.auth, new GoogleAuthProvider);

  }

 /* async getUserAuth() {
    const userData = await this.afAuth.currentUser;
    return userData;
  }*/
}
