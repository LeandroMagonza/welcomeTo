import { Component, OnInit } from '@angular/core';
import { Carta } from '../clases/carta';

@Component({
  selector: 'app-tablero-general',
  templateUrl: './tablero-general.component.html',
  styleUrls: ['./tablero-general.component.css']
})
export class TableroGeneralComponent implements OnInit {

  mazo: Carta[] = [];


  constructor() {
    this.mazo.push(new Carta("construirPiscina",14))
    this.mazo.push(new Carta("revalorizarParcela",1))
    this.mazo.push(new Carta("colocarValla",6))
    this.mazo.push(new Carta("contratarObreroTemporal",7))
    this.mazo.push(new Carta("mejorarParque",2))
    this.mazo.push(new Carta("bis",9))
    this.mazo.push(new Carta("construirPiscina",14))
    this.mazo.push(new Carta("colocarValla",6))
    this.mazo.push(new Carta("bis",9))
    this.mazo.push(new Carta("revalorizarParcela",1))
    this.mazo.push(new Carta("mejorarParque",2))
    this.mazo.push(new Carta("contratarObreroTemporal",7))
    //mezclar

   }

  ngOnInit(): void {
  }

  proxTurno(){
    this.mazo.shift();
    this.mazo.shift();
    this.mazo.shift();
  }
}
