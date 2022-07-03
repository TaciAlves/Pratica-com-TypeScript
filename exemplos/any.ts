let valorAny: any;
valorAny = 3;
valorAny = 'olá';
valorAny = true;

let valorString: string = 'teste';
valorString = valorAny;
let valorString2: string = 'teste2';
valorString2 = valorAny;

function somarString(string1: string, string2: string) {
    console.log(string1 + string2);
}

somarString(valorString, valorString2);
somarString('olá ', ', como vai?');