import { Component, OnInit, ViewChild } from '@angular/core';
import { IonItemSliding, IonList, ToastController } from '@ionic/angular';
import { DataService } from 'src/providers/data.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss']
})
export class ListPage implements OnInit {
    data: any;
    constructor(private dataService: DataService, private toastCtrl: ToastController) {}
    @ViewChild('lista', { static: false }) list: IonList;

    ngOnInit() {
        this.dataService.getUsers().subscribe(data => {
            this.data = data;
        });
    }

    async favorite(slidingItem: IonItemSliding): Promise<any> {
        console.log('favorite');
        this.presentToast('Guardo en favoritos');
        slidingItem.close();
    }

    async delete(slidingItem: IonItemSliding): Promise<any> {
        console.log('delete');
        this.presentToast('Eliminado!');
        slidingItem.close();
    }

    async share(slidingItem: IonItemSliding): Promise<any> {
        console.log('share');
        this.presentToast('Compartido!');
        slidingItem.close();
    }

    async presentToast(message: string) {
        const toast = await this.toastCtrl.create({
            message,
            duration: 2000
        });
        toast.present();
    }
}
