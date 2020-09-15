function calcularMedia(){

    var total = 0;
    var qtd = arguments.length;
    var x = 0;
    //verifica se é do tipo número
    while(typeof arguments[x] === 'number'){
        total += arguments[x];
        x++
    }

    return total / qtd;
}
