import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {}

  registrado=false;
  
  boxNombre:string;
  boxApellido:string;
  boxCorreo:string;
  boxCiudad:string;
  boxCodigoPostal:number;
  boxContrasena:string;
  checkBox:boolean = true;

  /* Solucionar el error */
  name = new FormControl('',Validators.required);
  apellido = new FormControl('',Validators.required);
  correo = new FormControl('',[Validators.required,Validators.email])
  /* Lista Usuarios */
  listaUsuarios: Usuario[] =[
  //nombre:string,apellidos:string,correo:string,ciudad:string,codigoPostal:number,contrasena:string,aceptarCondiciones:boolean
  //tengo ya uno creado
  new Usuario("Juan","Diaz",'juan@gmail.com','madrid',28003,'12345',true)
  ];
  //recojo los datos del usuario
  registrarUsuario(){
    if(this.checkBox==true){
    let miUsuario = new Usuario(this.boxNombre,this.boxApellido,this.boxCorreo,this.boxCiudad,this.boxCodigoPostal,this.boxContrasena,this.checkBox);
    this.listaUsuarios.push(miUsuario);
    console.log(this.checkBox);
    console.log(miUsuario)
  }else{
    console.log('Por favor acepta la condiciones');
  }

}

}
