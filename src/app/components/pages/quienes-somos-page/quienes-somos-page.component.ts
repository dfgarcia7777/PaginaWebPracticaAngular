import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quienes-somos-page',
  templateUrl: './quienes-somos-page.component.html',
  styleUrls: ['./quienes-somos-page.component.css']
})
export class QuienesSomosPageComponent implements OnInit {

  lat:number = 40.3863102;//latitud de la empresa
  lng:number = -3.763818619;//longitude de la empresa
  zoom:number = 17;

  constructor() { }

  ngOnInit(): void {

  }

}
