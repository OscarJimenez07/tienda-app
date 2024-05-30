// producto-modal.page.ts
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductosService, Producto } from '../services/productos.service';

@Component({
  selector: 'app-producto-modal',
  templateUrl: './producto-modal.page.html',
  styleUrls: ['./producto-modal.page.scss'],
})
export class ProductoModalPage implements OnInit {
  @Input() producto: Producto | null = null;

  constructor(
    private modalController: ModalController,
    private productosService: ProductosService
  ) { }

  ngOnInit() {
    if (!this.producto) {
      this.producto = {
        id: 0,
        presupuesto: 0,
        unidad: '',
        producto: '',
        cantidad: 0,
        valorUnitario: 0,
        valorTotal: 0,
        fechaAdquisicion: '',
        proveedor: ''
      };
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }

  save() {
    if (this.producto) {
      if (this.producto.id) {
        this.productosService.updateProducto(this.producto).subscribe(() => {
          this.dismiss();
        });
      } else {
        this.productosService.addProducto(this.producto).subscribe(() => {
          this.dismiss();
        });
      }
    } else {
      console.error('El producto es nulo.');
    }
  }
  
}
