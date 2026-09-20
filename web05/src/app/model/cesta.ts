import { ItemCesta } from './item-cesta';

export class Cesta {

  constructor(
    public itens: ItemCesta[] = []
  ) {}

  get total(): number {
    return this.itens.reduce(
      (total, item) => total + item.subtotal,
      0
    );
  }

}