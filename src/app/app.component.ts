import {Component} from '@angular/core';
import {IconsService} from './utils/icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(iconService: IconsService) {
    iconService.init();
  }
}
