import { ChangeDetectionStrategy, Component, ElementRef, inject, Input, NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { NATIVE_DIALOG_DATA, NativeDialogRef, NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { GridLayout } from '@nativescript/core';

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
    modalData = inject(NATIVE_DIALOG_DATA);

    constructor() {
    }
ß
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

  }