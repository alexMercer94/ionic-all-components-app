import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-reorder',
    templateUrl: './list-reorder.page.html',
    styleUrls: ['./list-reorder.page.scss']
})
export class ListReorderPage implements OnInit {
    characters = ['Aquaman', 'Superman', 'Batman', 'Flash', 'Mujer Maravilla'];

    constructor() {}

    ngOnInit() {}

    reorder(event): void {
        console.log(event);
        const moveItem = this.characters.splice(event.detail.from, 1)[0];
        this.characters.splice(event.detail.to, 0, moveItem);
        event.detail.complete();
    }

    onClick(): void {
        console.log(this.characters);
    }
}
