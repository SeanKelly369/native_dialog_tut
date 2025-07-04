import { ChangeDetectionStrategy, Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeDialogConfig, NativeDialog, NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { PresidentModalComponent } from '../modals/president-modal/president-modal.component';
import { PresidentModel } from '../interfaces/president-model';

@Component({
    selector: 'president',
    templateUrl: './president.component.html',
    styleUrls: ['./president.component.scss', '../app.component.scss'],
    imports: [NativeScriptCommonModule, NativeScriptRouterModule],
    schemas: [NO_ERRORS_SCHEMA],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PresidentComponent {

    @Input() president: PresidentModel;

    constructor(private modal: NativeDialog) {
    }

    openModal() {
        const modalOptions: NativeDialogConfig = {
            data: this.president,
            nativeOptions: {
                fullscreen: false,
                animated: false,
                ios: {
                    presentationStyle: UIModalPresentationStyle.Custom
                }
            }
        };
        const ref = this.modal.open(PresidentModalComponent, modalOptions);

        ref.afterClosed().subscribe( (result) => {
            console.log(result);
        });
    }}