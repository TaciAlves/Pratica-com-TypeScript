//retorno seguro de função
function somarValoresNumericos(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(somarValoresNumericos(1,2));

function printarValoresNumericos(num1: number, num2: number): void {
    console.log(num1 + num2)
} //função do tipo void significa sem retorno

function somarValoresNumericosETratar(num1: number, num2: number, callback:(num: number) => number): number {
    let resultado = num1 + num2;
    return callback(resultado);
}

function aoQuadrado(num: number): number {
    return num * num;
}

function dividirPorEleMesmo(num: number): number {
    return num / num;
}

console.log(somarValoresNumericosETratar(1, 2, aoQuadrado))
