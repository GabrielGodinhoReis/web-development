import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cesta as CestaModel } from '../model/cesta';
import { ItemCesta } from '../model/item-cesta';

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cesta.html',
  styleUrl: './cesta.css'
})
export class Cesta {

  cesta = new CestaModel([
    new ItemCesta('Mochila Escolar', 1, 89.90),
    new ItemCesta('Caderno Universitário', 2, 24.90),
    new ItemCesta('Garrafa Térmica', 1, 59.90),
    new ItemCesta('Fone de Ouvido', 1, 79.90),
    new ItemCesta('Caneta Azul', 5, 2.50)
  ]);

}