import { Departamento } from './universidadeDep';

export class Universidade {
  adicionarDepartamento(dpto2: Departamento) {
    throw new Error('Method not implemented.');
  }
  departamentos: any;
  constructor(public nome: string, private local: string) {}
}

export class Pessoa {
  constructor(
    protected nome: string,
    protected dataNascimento: string,
    private universidade: Universidade
  ) {}

  imprimirInformacoes() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Data nascimento: ${this.dataNascimento}`);
    console.log(`Universidade: ${this.universidade.nome}`);
  }
}
