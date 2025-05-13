$("#calcular").click(function () {
    var valor = parseFloat($("#txtvalor").val());
    var desconto = parseFloat($("#txtdesconto").val());
    var multa = parseFloat($("#txtmulta").val());

    if(isNaN(valor) || isNaN(desconto) || isNaN(multa)){
        alert("Por favor, insira números válidos.")
        return;
    }

    var final = parseFloat((valor * (desconto/100)+multa).toFixed(2));

    var moeda = final.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });

    $("#txtresultado")
        .text("Valor final: " + moeda)
        .css({ 'font-weight': 'bold', 'font-size': '18pt', 'color': '#0000FF' })
        .fadeIn(1000);
    if(final > 5) {
        alert("Valor final maior que 5");
        $("#txtresultado").css('color', '#FF0000');
    }else{
        $("#txtresultado").css('color', '#00FF00');
        alert("Valor final menor que 5");
    }    
    //if ternário - decisão em uma linha
    var mostrar = 'da media';
    mostrar = (final > 5) ? 'acima' + mostrar : 'abaixo' + mostrar;
    alert("O valor final está " + mostrar);
    
    //switch case
    switch (true) {
        case (final > 10):
            alert("Valor Final maior que 10");
            break;
        case (final > 5):
            alert("Valor Final maior que 5");
            break;
        default:
            alert("Valor Final menor ou igual a 5");
    }

    var msg = "";
    switch (parseInt(final) % 2){
        case 0:
            alert("Valor final é par");
            msg = "par";
            break;
        case 1:
            alert("Valor final é impar");
            msg = "impar";
            break;
        default:
            alert("Valor final não é um número")
    }
    $("#txtmsg")
    .text("O valor é " + msg)
    .css({'font-weight': 'bold', 'font-size': '14pt', 'color': '#0000FF'});

    //fatorial 
    var fatorial = 1;
    for (var i = 1; i <= valor; i++) {
        fatorial *= i;
    }
    $("#txtfatorial").text("fatorial de " + valor + " é " + fatorial)
    .css({'font-weight': 'bold', 'font-size': '14pt', 'color': '#6C0007'})
});
