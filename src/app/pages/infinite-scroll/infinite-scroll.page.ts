import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-infinite-scroll',
    templateUrl: './infinite-scroll.page.html',
    styleUrls: ['./infinite-scroll.page.scss']
})
export class InfiniteScrollPage implements OnInit {
    // @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

    data: any[] = Array(30);

    constructor() {}

    ngOnInit() {}

    loadData(event: any): void {
        console.log('cargando');
        setTimeout(() => {
            if (this.data.length > 50) {
                event.target.complete();
                // this.infiniteScroll.disabled = true;
                return;
            }
            const newArr = Array(20);
            this.data.push(...newArr);
            event.target.complete();
        }, 1000);
    }
}
