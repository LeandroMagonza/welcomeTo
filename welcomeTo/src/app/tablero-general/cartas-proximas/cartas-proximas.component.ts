import { Component, Input, OnInit } from '@angular/core';
import { Carta } from 'src/app/clases/carta';

@Component({
  selector: 'app-cartas-proximas',
  templateUrl: './cartas-proximas.component.html',
  styleUrls: ['./cartas-proximas.component.css']
})
export class CartasProximasComponent implements OnInit {
  @Input() mazo: Carta[];
  constructor() { }

  ngOnInit(): void {
  }

}
