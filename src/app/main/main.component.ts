import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { appRoutePaths } from '../app.routes.names';
import { NativeScriptCommonModule, NativeScriptRouterModule, RouterExtensions } from '@nativescript/angular';
import { PresidentModel } from '../interfaces/president-model';
import { PRESIDENTS } from '../presidents-data/presidents.data';
import { EventData, ObservableArray } from '@nativescript/core';
import { PresidentComponent } from '../president/president.component';
import { CollectionViewModule } from '@nstudio/ui-collectionview/angular';
import { CollectionView } from '@nstudio/ui-collectionview';


@Component({
  selector: 'Main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss', '../app.component.scss'],
  imports: [NativeScriptCommonModule, NativeScriptRouterModule, CollectionViewModule, PresidentComponent],
  schemas: [NO_ERRORS_SCHEMA],
  standalone: true
})export class MainComponent {

  presidents: ObservableArray<PresidentModel> = new ObservableArray();

  constructor(private router: RouterExtensions) {
    this.presidents = new ObservableArray(PRESIDENTS);
  }

  openAway(): void {
    this.router.navigate([appRoutePaths.AWAY_PAGE]);
  }

  onItemTap(args): void {
    const president = this.presidents[args.index];
  }

    doLoadedRemoveBandingAnimation(data: EventData): void {
    const collectionView = <CollectionView>data.object;
    if(global.isAndroid) {
      collectionView.android.setOverScrollMode(android.view.View.OVER_SCROLL_NEVER);
    } else {
      collectionView.ios.bounces = false;
    }
  }
}
