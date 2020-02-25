import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/providers/data.service';

@Component({
    selector: 'app-searchbar',
    templateUrl: './searchbar.page.html',
    styleUrls: ['./searchbar.page.scss']
})
export class SearchbarPage implements OnInit {
    albums: any[] = [];
    searchText = '';

    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.dataService.getAlbums().subscribe(data => {
            // console.log(data);
            this.albums = data;
        });
    }

    search(event): void {
        this.searchText = event.detail.value;
    }
}
