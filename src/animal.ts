export abstract class Animal {
  constructor(
    protected nome: string,
    protected raca: string,
    protected idade: number
  ) {}

  andar() {
    console.log(`${this.nome} andou`);
  }

  comer() {
    console.log(`${this.nome} comeu`);
  }

  dormir() {
    console.log(`${this.nome} dormiu`);
  }
}

export class Cachorro extends Animal {
  constructor(nome: string, raca: string, idade: number) {
    super(nome, raca, idade);
  }

  public andar(): void {
    super.andar();
  }

  public comer(): void {
    super.comer();
  }

  public dormir(): void {
    super.dormir();
  }

  public latir() {
    console.log(`${this.nome}: au au`);
  }
}

export class Cavalo extends Animal {
  constructor(nome: string, raca: string, idade: number) {
    super(nome, raca, idade);
  }

  public andar(): void {
    super.andar();
  }

  public comer(): void {
    super.comer();
  }

  public dormir(): void {
    super.dormir();
  }

  public relinchar() {
    console.log(`${this.nome}: ieen ieen Hiin in in`);
  }
}

export class Gato extends Animal {
  constructor(nome: string, raca: string, idade: number) {
    super(nome, raca, idade);
  }

  public andar(): void {
    super.andar();
  }

  public comer(): void {
    super.comer();
  }

  public dormir(): void {
    super.dormir();
  }

  public miar() {
    console.log(`${this.nome}: miau`);
  }
}
