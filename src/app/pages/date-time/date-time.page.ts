import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-date-time',
    templateUrl: './date-time.page.html',
    styleUrls: ['./date-time.page.scss']
})
export class DateTimePage implements OnInit {
    fDate: Date = new Date();
    customPickerOptions;
    customDate;

    constructor() {}

    ngOnInit() {
        this.customPickerOptions = {
            buttons: [
                {
                    text: 'Save',
                    handler: event => {
                        console.log('Clicked Save!');
                        console.log(event);
                    }
                },
                {
                    text: 'Log',
                    handler: () => {
                        console.log('Clicked Log. Do not Dismiss.');
                        return false;
                    }
                }
            ]
        };
    }

    changeDate(event: any): void {
        console.log(`Ion-change: `, event);
        console.log('Date: ', new Date(event.detail.value));
    }
}
