import { Component, inject, NO_ERRORS_SCHEMA } from '@angular/core';
import { NATIVE_DIALOG_DATA, NativeDialogRef, NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';


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

    close() {
      const state = this.dialogRef.getState();
      console.info(state)
      this.dialogRef.close('test');
    }

  }