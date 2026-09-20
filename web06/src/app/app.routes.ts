import { Routes } from '@angular/router';

import { Vitrine } from './vitrine/vitrine';
import { Cadastro } from './cadastro/cadastro';

import { DetalheProduto } from './detalhe-produto/detalhe-produto';
import { Login } from './login/login';
import { CestaCompras } from './cesta-compras/cesta-compras';
import { ReenvioSenha } from './reenvio-senha/reenvio-senha';
import { ListaPedidos } from './lista-pedidos/lista-pedidos';
import { DadosPedido } from './dados-pedido/dados-pedido';
import { ResultadoBusca } from './resultado-busca/resultado-busca';

export const routes: Routes = [
  { path: '', component: Vitrine },
  { path: 'vitrine', component: Vitrine },
  { path: 'cadastro', component: Cadastro },

  { path: 'detalhe-produto', component: DetalheProduto },
  { path: 'login', component: Login },
  { path: 'cesta-compras', component: CestaCompras },
  { path: 'reenvio-senha', component: ReenvioSenha },
  { path: 'lista-pedidos', component: ListaPedidos },
  { path: 'dados-pedido', component: DadosPedido },
  { path: 'resultado-busca', component: ResultadoBusca }
];