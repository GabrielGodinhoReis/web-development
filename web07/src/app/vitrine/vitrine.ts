import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-vitrine',
  styleUrl: './vitrine.css',
  templateUrl: './vitrine.html',
})
export class Vitrine {

  lista: Produto[] = [

    {
      "codigo": 1,
      "nome": "Mochila Escolar",
      "descritivo": "Mochila resistente com vários compartimentos para uso escolar e universitário.",
      "valor": 109.90,
      "valorPromo": 89.90,
      "quantidade": 20,
      "destaque": 1
    },

    {
      "codigo": 2,
      "nome": "Caderno Universitário",
      "descritivo": "Caderno universitário com 200 folhas e capa resistente.",
      "valor": 29.90,
      "valorPromo": 24.90,
      "quantidade": 50,
      "destaque": 0
    },

    {
      "codigo": 3,
      "nome": "Garrafa Térmica",
      "descritivo": "Garrafa térmica com capacidade de 500ml para bebidas quentes ou geladas.",
      "valor": 69.90,
      "valorPromo": 59.90,
      "quantidade": 30,
      "destaque": 1
    },

    {
      "codigo": 4,
      "nome": "Fone de Ouvido",
      "descritivo": "Fone de ouvido com conexão sem fio e bateria de longa duração.",
      "valor": 99.90,
      "valorPromo": 79.90,
      "quantidade": 25,
      "destaque": 1
    },

    {
      "codigo": 5,
      "nome": "Caneta Azul",
      "descritivo": "Caneta esferográfica azul com escrita suave e confortável.",
      "valor": 3.50,
      "valorPromo": 2.50,
      "quantidade": 100,
      "destaque": 0
    },

  ];

}