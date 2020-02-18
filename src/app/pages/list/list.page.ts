import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { DataService } from 'src/providers/data.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss']
})
export class ListPage implements OnInit {
    data: any;
    constructor(private dataService: DataService) {}
    @ViewChild('lista', { static: false }) list: IonList;

    ngOnInit() {
        this.dataService.getUsers().subscribe(data => {
            this.data = data;
        });
    }

    favorite(): void {
        console.log('favorite');
        this.list.closeSlidingItems();
    }

    delete(): void {
        console.log('delete');
        this.list.closeSlidingItems();
    }

    share(): void {
        console.log('share');
        this.list.closeSlidingItems();
    }
}
