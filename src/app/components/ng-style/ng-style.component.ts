import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <!-- p [ngStyle]="{'font-size':'15px'}">
      Hola mundo.. esta es una etiqueta
    </p -->

    <p [ngStyle]="estilos">
      Etiqueta con estilos en un objeto
    </p>

    <p [style.fontSize.px]="tamano">
      Hola mundo.. esta es una etiqueta
    </p>

    <button class="btn btn-primary" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-danger" (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i>
    </button>


  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano:number = 10;

  estilos:any = {
    'font-size':'30px',
    'color': 'red',
    'font-weight': 'bold',
    'font-style': 'italic'
  }

  constructor() { }

  ngOnInit() {
  }

}
