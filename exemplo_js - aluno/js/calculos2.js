$("#calcular").click(function () {
    var nome = ($("#txtnome").val())
    var idade = parseFloat($("#txtidade").val())
    var salario = parseFloat($("#txtsalario").val())
    var dependentes = parseFloat($("#txtdependentes").val())

    if(nome =="" || isNaN(idade) || isNaN(salario) || isNaN(dependentes)){
        alert("Por favor, insira os componetes válidos.")
        return;
    }
    //print dos valores ja aparesentados pelo usuario:
    $("#txtresnome")
    .text("Seu nome é " + nome)
    .css({'font-weight': 'bold', 'font-size': '14pt', 'color': '#0000FF'});

    $("#txtresdependentes")
    .text("Seu número de dependentes é " + dependentes)
    .css({'font-weight': 'bold', 'font-size': '14pt', 'color': '#0000FF'});

    $("#txtsalariobrut")
    .text("Seu salario bruto é " + salario)
    .css({'font-weight': 'bold', 'font-size': '14pt', 'color': '#0000FF'});

    //bonus idade:
    if (idade > 50){
      var bonus = 300
    }else{
      var bonus = 200
    };

    

    var inss = salario * 0.08 
    var vt = salario * 0.05 
    var bonusdep = dependentes * 50 
    var totalres = salario - inss - vt + bonus + bonusdep

    $("#txtsalarioliquido")
    .text("Seu salario liquido é " + totalres)
    .css({'font-weight': 'bold', 'font-size': '14pt', 'color': '#0000FF'});

    $("#txttransporte")
    .text("Seu vale transporte é " + vt)
    .css({'font-weight': 'bold', 'font-size': '14pt', 'color': '#0000FF'});

    $("#txtinss")
    .text("Seu INSS é " + inss)
    .css({'font-weight': 'bold', 'font-size': '14pt', 'color': '#0000FF'});









});