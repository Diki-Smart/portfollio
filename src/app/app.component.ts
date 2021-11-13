import { Component } from '@angular/core';
import 'animate.css';
import { slideLeftOrRightAnimation } from './shared/animations/my_animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideLeftOrRightAnimation],
})
export class AppComponent {
  currentUrl: string = '';

  title = 'portfolio';

  getState(outlet: any) {
    return outlet.isActivated
      ? outlet.activatedRoute.snapshot.url[0].path
      : 'none';
  }

  checkRouteLink(outlet: any) {
    this.currentUrl = outlet.isActivated
      ? outlet.activatedRoute.snapshot.url[0].path
      : '';

    console.log(this.currentUrl);
    return this.currentUrl.split('-').includes('admin');
  }
}
