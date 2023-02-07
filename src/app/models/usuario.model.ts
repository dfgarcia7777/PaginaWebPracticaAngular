export class Usuario{
    
  nombre:string;
  apellidos:string;
  correo:string;
  ciudad:string;
  codigoPostal:number | undefined;
  contrasena: string;
  aceptarCondiciones:boolean;

  constructor(nombre:string,apellidos:string,correo:string,ciudad:string,codigoPostal:number,contrasena:string,aceptarCondiciones:boolean){
    this.nombre = nombre;
    this.apellidos =apellidos;
    this.correo =correo;
    this.ciudad =ciudad;
    this.codigoPostal = codigoPostal;
    this.contrasena = contrasena;
    this.aceptarCondiciones = aceptarCondiciones;
  }
}