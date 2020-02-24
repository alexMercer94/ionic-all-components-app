import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { ProgressBarPageRoutingModule } from './progress-bar-routing.module';
import { ProgressBarPage } from './progress-bar.page';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, ProgressBarPageRoutingModule, ComponentsModule],
    declarations: [ProgressBarPage]
})
export class ProgressBarPageModule {}
