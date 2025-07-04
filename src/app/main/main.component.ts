import { ChangeDetectionStrategy, Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { PresidentModel } from '../interfaces/president-model';
import { PRESIDENTS } from '../presidents-data/presidents.data';
import { EventData, ObservableArray, ScrollView } from '@nativescript/core';
import { PresidentComponent } from '../president/president.component';

@Component({
  selector: 'Main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss', '../app.component.scss'],
  imports: [NativeScriptCommonModule, NativeScriptRouterModule, PresidentComponent],
  schemas: [NO_ERRORS_SCHEMA],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
}) export class MainComponent {

  presidents: ObservableArray<PresidentModel> = new ObservableArray();

  constructor() {
    this.presidents = new ObservableArray(PRESIDENTS);
  }

  onItemTap(args): void {
    const president = this.presidents[args.index];
    console.log('president', president);
  }

  doLoadedRemoveBandingAnimation(data: EventData): void {
    const scrollView = <ScrollView>data.object;
    if(global.isAndroid) {
      scrollView.android.setOverScrollMode(android.view.View.OVER_SCROLL_NEVER);
    } else {
      scrollView.ios.bounces = false;
    }
  }

}
