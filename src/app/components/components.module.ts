import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PopinfoComponent } from './popinfo/popinfo.component';

@NgModule({
    declarations: [HeaderComponent, MenuComponent, PopinfoComponent],
    imports: [CommonModule, IonicModule, RouterModule],
    exports: [HeaderComponent, MenuComponent, PopinfoComponent]
})
export class ComponentsModule {}
