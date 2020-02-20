import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from 'src/providers/data.service';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.page.html',
    styleUrls: ['./inicio.page.scss']
})
export class InicioPage implements OnInit {
    components: Componente[] = [];

    constructor(private menuCtrl: MenuController, private dataService: DataService) {}

    ngOnInit() {
        this.dataService.getMenuOptions().subscribe((data: Componente[]) => {
            this.components = data;
        });
    }

    toggleMenu(): void {
        this.menuCtrl.toggle();
    }
}
