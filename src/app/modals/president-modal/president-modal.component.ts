import { ChangeDetectionStrategy, Component, ElementRef, inject, NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { NATIVE_DIALOG_DATA, NativeDialogRef, NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { GridLayout } from '@nativescript/core';
import { isIOS } from "@nativescript/core/platform";

@Component({
    selector: 'president-modal',
    templateUrl: './president-modal.component.html',
    styleUrls: ['./president-modal.component.scss', '../../app.component.scss'],
    imports: [NativeScriptCommonModule, NativeScriptRouterModule],
    schemas: [NO_ERRORS_SCHEMA],
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class PresidentModalComponent{

    dialogRef = inject(NativeDialogRef);
    president = inject(NATIVE_DIALOG_DATA);
    isIos: boolean = false;

    constructor() {
      if(isIOS) {
        this.isIos = true;
      }
    }

    close() {
      this.dialogRef.close('test');
    }

    containerRef: GridLayout;
    @ViewChild("container") set containerContent (elRef: ElementRef) {
      if(elRef) {
        this.containerRef = <GridLayout>elRef.nativeElement;
        setTimeout( () => {
            this.containerRef.animate({
              opacity: 1,
              duration: 350,
              curve: 'easeIn'
            });
        }, 100);
      }
    }

  onInnerTouch(event: any): void {
    event.cancel = true; // Prevent bubbling to outer layout
  }

  noop() {

  }
}