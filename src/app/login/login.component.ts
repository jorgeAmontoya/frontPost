import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import firebase from 'firebase/compat';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  

})
export class LoginComponent implements OnInit {
  currentUser!: firebase.User | null;
  
  constructor(
    private router: Router,
    private auth$ : AuthService,
    ) { }

   ngOnInit() {
    //this.currentUser = await this.auth$.getUserAuth();
    console.log( this.currentUser)
  }

  /*ingresaConGooglel(){
    this.auth$.ingresaConGoogle().then(res => {
      this.router.navigate(['posts']);
      console.log(res)
    }).catch(error => console.log(error)
     
    )
  }*/

 


  ingresaConGitHub(){

  }
  formulario(){
    
  }

}
