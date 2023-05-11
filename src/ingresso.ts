export abstract class Ingresso {
  constructor(protected valor: number) {}

  imprimirValor() {
    console.log(`O valor do ingresso é R$${this.valor}`);
  }
}

export class Normal extends Ingresso {}

export class Vip extends Ingresso {
  constructor(valor: number, private valorAdicional: number) {
    super(valor);
  }

  imprimirValor(): void {
    console.log(
      `O valor do ingresso VIP é R$${this.valor + this.valorAdicional}`
    );
  }
}

export class Camarote extends Ingresso {
  constructor(valor: number, private valorAdicional: number) {
    super(valor);
  }

  imprimirValor(): void {
    console.log(`o Valor do camarote é R$ ${this.valor + this.valorAdicional}`);
  }
}
