import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusComponent } from './menus/menus.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';



@NgModule({
  declarations: [
    MenusComponent,
    TarjetasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenusComponent,
    TarjetasComponent
  ]
})
export class MinionModule { }
