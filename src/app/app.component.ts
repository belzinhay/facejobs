import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Perfil', url: '/perfil', icon: 'person' },
    { title: 'Email', url: '/folder/Outbox', icon: 'folder' },
    { title: 'Historico de Vagas', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Logout', url: '/login', icon: 'exit' }
  ];
  
  constructor() {}
}
