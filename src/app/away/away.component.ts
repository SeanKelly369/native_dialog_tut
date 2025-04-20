import { Component, NO_ERRORS_SCHEMA, ViewContainerRef } from '@angular/core';
import { NativeDialogConfig, NativeDialog, NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { ModalTest } from '../modal-test/modal-test.component';

@Component({
    selector: 'Away',
    templateUrl: './away.component.html',
    styleUrls: ['./away.component.scss', '../app.component.scss'],
    imports: [NativeScriptCommonModule, NativeScriptRouterModule],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AwayComponent {

    constructor(private modal: NativeDialog, private vcRef: ViewContainerRef) {}

    openModal() {
        const modalOptions: NativeDialogConfig = {
            data: {name: 'Sean', occupation: 'Code Monkey'},
            viewContainerRef: this.vcRef,
            nativeOptions: {
                fullscreen: false,
                animated: false,
                ios: {
                    presentationStyle: UIModalPresentationStyle.BlurOverFullScreen
                }
            }
        };

        const ref = this.modal.open(ModalTest, modalOptions);

        ref.afterClosed().subscribe( (result) => {
            console.log(result);
        });

    }


}