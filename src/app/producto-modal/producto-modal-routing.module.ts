import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoModalPage } from './producto-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ProductoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoModalPageRoutingModule {}
