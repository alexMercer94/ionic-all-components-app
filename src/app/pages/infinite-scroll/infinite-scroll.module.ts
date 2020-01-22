import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { InfiniteScrollPageRoutingModule } from './infinite-scroll-routing.module';
import { InfiniteScrollPage } from './infinite-scroll.page';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, InfiniteScrollPageRoutingModule, ComponentsModule],
    declarations: [InfiniteScrollPage]
})
export class InfiniteScrollPageModule {}
