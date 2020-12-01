import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fe-obg-live-coding-app';
  links = [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'List',
      url: '/list'
    }
  ];
}
