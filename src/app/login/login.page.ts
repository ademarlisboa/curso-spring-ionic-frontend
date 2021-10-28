import { Component, OnInit,  } from '@angular/core';
import {  MenuController, NavController } from '@ionic/angular'
import { CredenciaisDto } from 'src/models/credenciaisDto';

//import { runInThisContext } from 'vm';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public navCtrl: NavController, public menu: MenuController) { }
  
  creds : CredenciaisDto =  {
    email: "",
    senha: ""
  };
  
  ngOnInit() {
     

  }

  public login(){
    
    alert(this.creds.email);
    this.navCtrl.navigateForward('/home');
  }

}
