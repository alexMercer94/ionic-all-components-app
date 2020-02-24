import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';
import { PopoverPageRoutingModule } from './popover-routing.module';
import { PopoverPage } from './popover.page';

@NgModule({
    entryComponents: [PopinfoComponent],
    imports: [CommonModule, FormsModule, IonicModule, PopoverPageRoutingModule, ComponentsModule],
    declarations: [PopoverPage]
})
export class PopoverPageModule {}
