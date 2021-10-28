import { Component, OnInit,  } from '@angular/core';
import {  MenuController, NavController } from '@ionic/angular'

//import { runInThisContext } from 'vm';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public navCtrl: NavController, public menu: MenuController) { }

  ngOnInit() {
     

  }

  public login(){
    this.navCtrl.navigateForward('/home');
  }

}
