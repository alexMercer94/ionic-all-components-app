import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModalInfoPageModule } from '../modal-info/modal-info.module';
import { ModalInfoPage } from '../modal-info/modal-info.page';
import { ModalPageRoutingModule } from './modal-routing.module';
import { ModalPage } from './modal.page';

@NgModule({
    entryComponents: [ModalInfoPage],
    imports: [CommonModule, FormsModule, IonicModule, ModalPageRoutingModule, ComponentsModule, ModalInfoPageModule],
    declarations: [ModalPage]
})
export class ModalPageModule {}
