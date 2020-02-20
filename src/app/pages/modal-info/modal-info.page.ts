import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-modal-info',
    templateUrl: './modal-info.page.html',
    styleUrls: ['./modal-info.page.scss']
})
export class ModalInfoPage implements OnInit {
    @Input() name;
    @Input() lastName;
    @Input() country;

    constructor(private modalCtrl: ModalController) {}

    ngOnInit() {}

    exitWithoutArguments(): void {
        this.modalCtrl.dismiss();
    }

    exitWithArguments(): void {
        this.modalCtrl.dismiss({
            name: 'Slayer',
            lastName: 'Takedown',
            country: 'US'
        });
    }
}
