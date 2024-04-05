import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Alertas', url: '/alerts', icon: 'alert' },
    { title: 'Botones', url: '/buttons', icon: 'paper-plane' },
    { title: 'Checks', url: '/check', icon: 'heart' },
    { title: 'Fab', url: '/fab', icon: 'archive' },
    { title: 'Lista', url: '/list', icon: 'list' },
  ];
  constructor() {}
}
