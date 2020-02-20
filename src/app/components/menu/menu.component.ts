import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/providers/data.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    components: Componente[];

    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.dataService.getMenuOptions().subscribe((data: Componente[]) => {
            this.components = data;
        });
    }
}
