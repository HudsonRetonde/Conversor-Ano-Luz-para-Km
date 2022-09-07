function converter() {
    var valorElemento = document.getElementById('valor')
    var valor = valorElemento.value;
    var valorFormatado = parseFloat(valor);

    var valorLuz = valor * 9460800000000;

    console.log(valorLuz);

    var elementoValorConvertido = document.getElementById('valorConvertido');
    var valorConvertido = `A distância em quilômetro é:  ${valorLuz} Km.`;
    elementoValorConvertido.innerHTML = valorConvertido;
}