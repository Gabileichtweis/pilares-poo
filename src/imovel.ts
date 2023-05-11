export abstract class Imovel {
  constructor(protected endereco: string, protected preco: number) {}

  public imprimirValor(contexto: string, valor: number) {
    if (contexto === 'novo') {
      console.log(`O valor do imovel é RS${this.preco + valor}`);
    } else {
      console.log(`O valor do imovel é RS${this.preco - valor}`);
    }
  }
}

export class Novo extends Imovel {
  constructor(
    endereco: string,
    preco: number,
    private contexto: string,
    private precoAdicional: number
  ) {
    super(endereco, preco);
  }

  public imprimirValor(): void {
    super.imprimirValor(this.contexto, this.precoAdicional);
  }
}

export class Velho extends Imovel {
  constructor(
    endereco: string,
    preco: number,
    private contexto: string,
    private precoDesconto: number
  ) {
    super(endereco, preco);
  }

  public imprimirValor(): void {
    super.imprimirValor(this.contexto, this.precoDesconto);
  }
}
