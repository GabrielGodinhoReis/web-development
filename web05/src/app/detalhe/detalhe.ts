import { Component } from '@angular/core';
import { ItemCesta } from '../model/item-cesta';

@Component({
  selector: 'app-detalhe',
  standalone: true,
  templateUrl: './detalhe.html',
  styleUrl: './detalhe.css'
})
export class Detalhe {

  item = new ItemCesta(
    'Mochila Escolar',
    1,
    89.90
  );

}