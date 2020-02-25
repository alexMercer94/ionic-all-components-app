import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SearchbarPageRoutingModule } from './searchbar-routing.module';
import { SearchbarPage } from './searchbar.page';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, SearchbarPageRoutingModule, PipesModule],
    declarations: [SearchbarPage]
})
export class SearchbarPageModule {}
