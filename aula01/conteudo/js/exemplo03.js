$("#calcular").click(function(){
    var valor1 = parseFloat($("#txtvalor1").val());
    var valor2 = parseFloat($("#txtvalor2").val());
    var valor3 = parseFloat($("#txtvalor3").val());
    var valor = 0
    const list = [valor1, valor2, valor3]

//ordem crescente
    $("#list").text("Ordem Crescente: " + list.sort());  
//media
    var resultado = parseFloat((valor1 + valor2 + valor3) / 3);
    $("#resultado")
        .text("Resultado: " + resultado)
        .css({'font-weight': 'bold', 'font size': '18pt'});
    alert(resultado);

    //Loop
    for(let x in list){
        valor += list[x]
    }
    $("#loop").text("Loop: " + valor);
});