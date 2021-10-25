import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Moedas', url: '/folder/Moedas', icon: 'mail' },
    { title: 'Cédulas', url: '/folder/Cedulas', icon: 'paper-plane' },
    { title: 'Selos', url: '/folder/Selos', icon: 'heart' },
    { title: 'Relatórios', url: '/folder/Relatorios', icon: 'archive' },
    { title: 'Lixo', url: '/folder/Trash', icon: 'trash' },
    { title: 'Login', url: '/folder/login', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
