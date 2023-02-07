import { Component, OnInit } from '@angular/core';
import { PRODUCTOS } from 'src/app/data/dataProductos';
/* traigo la interface */
import { Productos } from '../../../models/Productos.interface';
/* traigo el servicio */
import { ProductosService } from 'src/app/services/productos.service';
@Component({
  selector: 'app-tienda-page',
  templateUrl: './tienda-page.component.html',
  styleUrls: ['./tienda-page.component.css']
})
export class TiendaPageComponent implements OnInit {

  total:number =0;
  listaProductos: Productos[]=[];
  productoSelecionado: Productos | undefined;
  /* Inyectamos en el constructor el servicio de Productos */
  constructor(private productosService: ProductosService) { 
    /* this.listaProductos = PRODUCTOS;
    console.log(this.listaProductos); */
  }
  ngOnInit(): void {
    //obtenemos la lista que nos brinda el servicio
    this.listaProductos=this.productosService.obtenerListaProductos();//si fuera sincrono
  }

  disminuir(id:number){
    /* console.log(PRODUCTOS[id]);
    console.log(this.listaProductos);
    console.log(id);
    console.log(id); */
  /*  console.log(this.productosService.obtenerIdProductos(id));
    if(this.productosService.obtenerIdProductos(id) == this.productoSelecionado){ */
     /*  console.log(PRODUCTOS[id]);
      console.log(this.listaProductos);
      console.log(id);
      console.log(this.productoSelecionado); */
      return this.total--;
   /*  }
    return; */
  }

  aumentar(id:number){
  /*   console.log(PRODUCTOS[id]);
    console.log(this.listaProductos);
    console.log(id);
    console.log(this.productosService.obtenerIdProductos(id)); */
    /* this.productoSelecionado=this.productosService.obtenerIdDeUnProducto(id); */
    /* console.log('neceistamos' +this.productosService.obtenerIdDeUnProducto(id));
    console.log('obtenemos  ' +this.productoSelecionado); */

    return this.total++;
  }
}
