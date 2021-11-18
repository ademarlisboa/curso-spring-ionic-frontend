import { Component, OnInit,  } from '@angular/core';
import {  MenuController, NavController } from '@ionic/angular'
import { CredenciaisDto } from 'src/models/credenciaisDto';
import { AuthService } from '../services/auth.service';


//import { runInThisContext } from 'vm';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public navCtrl: NavController, public menu: MenuController,public auth : AuthService) { }
  

  creds : CredenciaisDto =  {
    email: "",
    senha: ""
  };
  
  ngOnInit() {
     

  }

  public login(){
    this.auth.authenticate(this.creds).subscribe(response => {
     //alert(response.headers.get('Authorization'));
      //console.log(response.headers.get('Authorization')
      this.auth.sucessfullLogin(response.headers.get('Authorization'));
    });


   // alert(this.creds.email);
    this.navCtrl.navigateForward('/home');
  }

}
