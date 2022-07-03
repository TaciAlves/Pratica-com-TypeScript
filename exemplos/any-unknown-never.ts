let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

let stringTeste: string = 'verificar'
stringTeste = anyEstaDeVolta;

let unknownValor: unknown;
unknownValor = 1;
unknownValor = 'olá';
unknownValor = true;
unknownValor = 'vai sim';

let stringTeste2: string = 'agora vai';


if (typeof unknownValor === 'string') {
    stringTeste2 = unknownValor;
}
// objetos do tipo unknown são obrigados a fazer verificação

function jogaErro(erro: string, codigo: number): never {
    throw {error: erro, code: codigo}
}

jogaErro('deu erro', 500)