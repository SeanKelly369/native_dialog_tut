import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
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

    constructor(private modal: NativeDialog) {}

    openModal() {
        const modalOptions: NativeDialogConfig = {
            data: {name: 'Sean', occupation: 'Software Developer'},
            nativeOptions: {
                fullscreen: true,
                animated: true,
                ios: {
                    presentationStyle: UIModalPresentationStyle.FullScreen
                }
            }
        };

        const ref = this.modal.open(ModalTest, modalOptions);

        ref.afterClosed().subscribe( (result) => {
            console.log(result);
        });

    }


}