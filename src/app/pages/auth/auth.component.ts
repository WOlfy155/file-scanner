import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  host: {class: 'page'},
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {

}
