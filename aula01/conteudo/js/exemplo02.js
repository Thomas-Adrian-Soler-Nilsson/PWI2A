$("#alternar2").hide();
$("#alternar3").hide();

$("#alternar1").click(function () {
    $("#link").attr({
        "href" : "https://fatecitu.cps.sp.gov.br/",
        "title" : "Fatec Itu"
    });
    $("#link").text("Fatec Itu");
    $("#alternar1").hide();
    $("#alternar2").show();
    $("#alertBox").removeClass().addClass("alert alert-success").text("A Faculdade de Tecnologia (Fatec) de Itu é uma instituição pública que oferece cursos superiores tecnológicos gratuitos, focados em inovação e empregabilidade.!");
});

$("#alternar2").click(function () {
    $("#link").attr({
        "href" : "https://www.cps.sp.gov.br",
        "title" : "CPS"
    });
    $("#link").text("CPS");
    $("#alternar2").hide();
    $("#alternar3").show();
    $("#alertBox").removeClass().addClass("alert alert-warning").text("Instituição do Governo de São Paulo que administra as Etecs e Fatecs, oferecendo ensino técnico e superior tecnológico gratuito para a formação profissional.");
});

$("#alternar3").click(function () {
    $("#link").attr({
        "href" : "https://etecitu.cps.sp.gov.br/",
        "title" : "Etec Itu"
    });
    $("#link").text("Etec Itu");
    $("#alternar3").hide();
    $("#alternar1").show();
    $("#alertBox").removeClass().addClass("alert alert-primary").text(" A Escola Técnica Estadual (Etec) de Itu oferece cursos técnicos e ensino médio integrado ao técnico gratuitos em diversas áreas, preparando os alunos para o mercado de trabalho e o ensino superior.");
});

