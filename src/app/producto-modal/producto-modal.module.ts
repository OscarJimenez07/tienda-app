import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoModalPageRoutingModule } from './producto-modal-routing.module';

import { ProductoModalPage } from './producto-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoModalPageRoutingModule
  ],
  declarations: [ProductoModalPage]
})
export class ProductoModalPageModule {}
