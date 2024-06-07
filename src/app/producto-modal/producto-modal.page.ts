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

  calculateTotal() {
    if (this.producto) {
      this.producto.valorTotal = this.producto.cantidad * this.producto.valorUnitario;
    }
  }
  
  save() {
    if (this.producto) {
      if (
        this.producto.producto &&
        this.producto.unidad &&
        this.producto.presupuesto >= 0 && 
        this.producto.cantidad >= 0 && 
        this.producto.valorUnitario >= 0 && 
        this.producto.valorTotal >= 0 && 
        this.producto.fechaAdquisicion &&
        this.producto.proveedor
      ) {
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
        console.error('Por favor complete todos los campos y asegúrese de que los valores numéricos no sean negativos.');
        alert('Por favor complete todos los campos y asegúrese de que los valores numéricos no sean negativos.')
      }
    } else {
      console.error('El producto es nulo.');
    }
  }
  getMaxDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    let month: string | number = today.getMonth() + 1;
    let day: string | number = today.getDate();

    if (month < 10) {
      month = '0' + month;
    }

    if (day < 10) {
      day = '0' + day;
    }

    return `${year}-${month}-${day}`;
  }
  
  
}
