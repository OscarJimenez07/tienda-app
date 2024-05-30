import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Producto {
  id: number;
  presupuesto: number;
  unidad: string;
  producto: string;
  cantidad: number;
  valorUnitario: number;
  valorTotal: number;
  fechaAdquisicion: string;
  proveedor: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private baseUrl = 'http://192.168.1.12/ActivacionCupo/productos.php';

  constructor(private http: HttpClient) { }

  // Obtener todos los productos
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError<Producto[]>('getProductos', []))
      );
  }

  // Crear un nuevo producto
  addProducto(producto: Producto): Observable<any> {
    return this.http.post<any>(this.baseUrl, producto)
      .pipe(
        catchError(this.handleError<any>('addProducto'))
      );
  }

  // Actualizar un producto existente
  updateProducto(producto: Producto): Observable<any> {
    return this.http.put<any>(this.baseUrl, producto)
      .pipe(
        catchError(this.handleError<any>('updateProducto'))
      );
  }

  // Eliminar un producto
  deleteProducto(id: number): Observable<any> {
    return this.http.request<any>('delete', this.baseUrl, { body: { id } })
      .pipe(
        catchError(this.handleError<any>('deleteProducto'))
      );
  }

  // Manejar errores
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

