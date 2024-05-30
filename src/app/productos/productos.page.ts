// productos.page.ts
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductosService, Producto } from '../services/productos.service';
import { ProductoModalPage } from '../producto-modal/producto-modal.page';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  productos: Producto[] = [];
  searchTerm: string = '';

  constructor(
    private productosService: ProductosService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.loadProductos();
  }

  loadProductos() {
    this.productosService.getProductos().subscribe(productos => {
      this.productos = productos;
    });
  }

  get filteredProductos() {
    return this.productos.filter(producto => {
      return producto.producto.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
             producto.unidad.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  async openModal(producto: Producto | null) {
    const modal = await this.modalController.create({
      component: ProductoModalPage,
      componentProps: { producto }
    });
    modal.onDidDismiss().then(() => {
      this.loadProductos();
    });
    return await modal.present();
  }
  

  deleteProducto(id: number) {
    this.productosService.deleteProducto(id).subscribe(() => {
      this.loadProductos();
    });
  }
}
