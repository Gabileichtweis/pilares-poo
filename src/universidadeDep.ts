export class UniversidadeDep {
  private _departamentos: Departamento[];

  constructor(
    private _nome: string,
    private _local: string,
    departamentos: Departamento[] = []
  ) {
    this._departamentos = departamentos;
  }

  public get nome() {
    return this._nome;
  }
  public get local() {
    return this._local;
  }
  public get departamentos() {
    return this._departamentos;
  }

  adicionarDepartamento(departamento: Departamento) {
    this._departamentos.push(departamento);
  }
}

export class Departamento {
  constructor(private _nome: string) {}

  public get nome() {
    return this._nome;
  }
}

export class PessoaDep {
  constructor(
    protected _nome: string,
    protected _dataNascimento: string,
    private _universidade: UniversidadeDep,
    private _departamento: Departamento
  ) {}

  public get nome() {
    return this._nome;
  }
  public get dataNascimento() {
    return this._dataNascimento;
  }
  public get universidade() {
    return this._universidade;
  }
  public get departamento() {
    return this._departamento;
  }

  imprimirInformacoes() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Data nascimento: ${this.dataNascimento}`);
    console.log(`Universidade: ${this.universidade.nome}`);
    console.log(`Departamento: ${this.departamento.nome}`);
  }
}
