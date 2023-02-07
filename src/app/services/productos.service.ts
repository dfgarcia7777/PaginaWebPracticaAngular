import { Injectable } from '@angular/core';
/* importamos  */
import { Productos } from '../models/Productos.interface';
import { PRODUCTOS } from '../data/dataProductos';

/* este servicio lo tenemos declarado a nivel de raiz para que ahora mismo cualquier componente pueda hacer uso de el 
sino deberia de inclurse en los providers a nivel de modulo o de componenete*/
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }
  /* obtenemos la lista de los productos */
  obtenerListaProductos(): Productos[]{
    return PRODUCTOS;
  }
  obtenerIdProductos(id:number): Productos | undefined{
    /* buscamos el producto por ID de la lista de Productos */
    const producto = PRODUCTOS.find((producto: Productos) => producto.id === id);
    if(producto){

      return producto;
    }else{
      return;
    }
  }
  obtenerIdDeUnProducto(id:number): Productos | any {
    /* buscamos el producto por ID de la lista de Productos */
    let producto = PRODUCTOS.findIndex((producto: Productos) => producto.id === id);
    
    /* console.log(producto); */
    /* if(index){

      return index;
    }else{
      return;
    } */
  }
}
