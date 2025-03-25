$("#calcular").click(function(){
    var valor1 = parseFloat($("#txtvalor1").val());
    var valor2 = parseFloat($("#txtvalor2").val());

    var resultado = parseFloat((valor1 + valor2) / 100);
    var moeda = resultado.toLocaleString("pt-br", 
        {
            style: "currency",
            currency: "BRL"
        });
    $("#resultado")
        .text("Resultado: " + moeda)
        .css({'font-weight': 'bold', 'font size': '18pt'});

    alert(resultado);

    //msg
    if(valor1 > valor2) {
        msg = "Valor 1 é maior";
    } else if (valor1 < valor2) {
        msg = "Valor 2 é maior";
    } else {
        msg = "Valores iguais";
    }
    alert(msg);

    //ternário
    msg = valor1 > valor2?'Valor 1 é maior': 'Valor 1 não é maior';

    //switch
    switch(parseInt(resultado) % 2){
        case 0:
            msg += ' - Resultado é par';
            break;
        default:
            msg += ' - Resultado é impar';
            break;
    }
    $("#msg")
        .text("Mensagem: " + msg)
        .css({'font-weight': 'bold', 'font size': '18pt', 'color':'blue'});
    
    //fatorial
    var fatorial = 1 
    for(var x = 1; x <= valor1; x++) {
        fatorial *= x;
    }
    $("#fatorial")
    .text("Fatorial: " + fatorial)
    .css({'font-weight': 'bold', 'font size': '18pt', 'color':'#ccc'});
});