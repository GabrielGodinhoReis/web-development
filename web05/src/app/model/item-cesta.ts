export class ItemCesta {

  constructor(
    public produto: string,
    public quantidade: number,
    public preco: number
  ) {}

  get subtotal(): number {
    return this.quantidade * this.preco;
  }

}