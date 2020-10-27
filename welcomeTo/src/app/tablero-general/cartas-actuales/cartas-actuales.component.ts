import { Component, Input, OnInit } from '@angular/core';
import { Carta } from 'src/app/clases/carta';

@Component({
  selector: 'app-cartas-actuales',
  templateUrl: './cartas-actuales.component.html',
  styleUrls: ['./cartas-actuales.component.css']
})
export class CartasActualesComponent implements OnInit {
  @Input() mazo: Carta[];
  constructor() { }

  ngOnInit(): void {
  }

}
