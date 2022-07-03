//objeto definido por inferencia
const pessoa = {
    nome: 'Deborah',
    idade: 20,
    profissao: 'psicóloga'
}

pessoa.idade = 25;

//tipagem explicita, tem que respeitar o tipo durante a criação do objeto
const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 23,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 23,
    profissao: 'Psicóloga'
}

enum Profissao {
    Professora,
    Atriz, 
    Psicóloga,
    Desenvoldedora
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 24,
    profissao: Profissao.Desenvoldedora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvoldedora,
    materias: ['Matemática Discreta', 'Programação', 'Lógica Computacional']
}

const monica: Estudante = {
    nome: 'Monica',
    idade: 28,
    materias: ['Matemática Discreta', 'Programação', 'Lógica Computacional']
}

function listar(lista: string[]) {
    for (const item of lista){
        console.log(' ', item);
    }
}

listar(monica.materias)