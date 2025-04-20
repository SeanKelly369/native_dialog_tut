import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { PageRouterOutlet } from '@nativescript/angular';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [PageRouterOutlet],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppComponent {}
