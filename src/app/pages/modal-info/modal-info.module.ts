import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalInfoPage } from './modal-info.page';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule],
    declarations: [ModalInfoPage]
})
export class ModalInfoPageModule {}
