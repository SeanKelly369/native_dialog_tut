import { Component, ElementRef, inject, NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { NATIVE_DIALOG_DATA, NativeDialogRef, NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { GridLayout } from '@nativescript/core';


@Component({
    selector: 'Home',
    templateUrl: './modal-test.component.html',
    styleUrls: ['./modal-test.component.scss', '../app.component.scss'],
    imports: [NativeScriptCommonModule, NativeScriptRouterModule],
    schemas: [NO_ERRORS_SCHEMA]
  })
  export class ModalTest{

    dialogRef = inject(NativeDialogRef);
    modalData = inject(NATIVE_DIALOG_DATA);

    constructor() {
      console.log(this.modalData);
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

  }