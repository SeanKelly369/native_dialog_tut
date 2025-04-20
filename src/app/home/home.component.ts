import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { appRoutePaths } from '../app.routes.names';
import {
  NativeScriptCommonModule,
  NativeScriptRouterModule,
  RouterExtensions,
} from '@nativescript/angular';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../app.component.scss'],
  imports: [NativeScriptCommonModule, NativeScriptRouterModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeComponent {

  constructor(private router: RouterExtensions) {}

  openAway() {
    this.router.navigate([appRoutePaths.AWAY_PAGE]);
  }
}
