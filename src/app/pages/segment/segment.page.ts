import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/providers/data.service';

@Component({
    selector: 'app-segment',
    templateUrl: './segment.page.html',
    styleUrls: ['./segment.page.scss']
})
export class SegmentPage implements OnInit {
    @ViewChild(IonSegment) segment: IonSegment;
    heroes: any[] = [];
    publisher = '';

    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.segment.value = 'todos';
        this.dataService.getHeroes().subscribe((heroes: any) => {
            console.log(heroes);

            this.heroes = heroes;
        });
    }

    segmentChanged(event): void {
        if (event.detail.value !== 'todos') {
            this.publisher = event.detail.value;
        } else {
            this.publisher = '';
        }
    }
}
