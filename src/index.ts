import { Camarote, Normal, Vip } from './ingresso';
import { Novo, Velho } from './imovel';
import { Cachorro, Cavalo, Gato } from './animal';
import { Pessoa, Universidade } from './universidade';
import { Departamento, UniversidadeDep, PessoaDep } from './universidadeDep';

function atividade1() {
  const normal = new Normal(100);
  normal.imprimirValor();

  const vip = new Vip(100, 150);
  vip.imprimirValor();

  const camarote = new Camarote(100, 300);
  camarote.imprimirValor();
}

function atividade2() {
  const novo = new Novo('Rua da alegria', 50000, 'novo', 10000);
  novo.imprimirValor();

  const velho = new Velho('Rua da tristeza', 50000, 'velho', 3000);
  velho.imprimirValor();
}

function atividade3() {
  const cachorro = new Cachorro('Laika', 'Lulu', 5);
  cachorro.andar();
  cachorro.latir();

  const cavalo = new Cavalo('Pocopó', 'Alemão', 15);
  cavalo.comer();
  cavalo.relinchar();

  const gato = new Gato('Mimi', 'Siamês', 7);
  gato.dormir();
  gato.miar();
}

function atividade4() {
  const universidade = new Universidade('Growdev', 'Campo Bom');

  const pessoa = new Pessoa('Gabriela Leichtweis', '19/10/2002', universidade);
  pessoa.imprimirInformacoes();
}

function atividade5() {
  const departamento = new Departamento('Técnico');
  const dpto2 = new Departamento('Departamento 2');
  const dpto3 = new Departamento('Departamento 3');
  const dpto4 = new Departamento('Departamento 4');
  const dpto5 = new Departamento('Departamento 5');
  const universidade = new UniversidadeDep('Growdev', 'Campo Bom', [
    departamento,
  ]);

  universidade.adicionarDepartamento(dpto2);
  universidade.adicionarDepartamento(dpto3);
  universidade.adicionarDepartamento(dpto4);
  universidade.adicionarDepartamento(dpto5);

  const pessoa = new PessoaDep(
    'Gabriela Leichtweis',
    '19/10/2002',
    universidade,
    departamento
  );
  pessoa.imprimirInformacoes();
  console.log(`${universidade.departamentos.map((dpto) => `\n${dpto.nome}`)}`);
}
