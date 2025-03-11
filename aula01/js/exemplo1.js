$("#esconder").click(function () {
    $("#teste1").hide();
});

$("#mostrar").click(function () {
    $("#teste1").show();
});

$("#alterarCSS").click(function () {
    $("#teste2").css({
        "background-color": "blue",
        "font-size": "200%",
        "color": "white"
    });
});

$("#alterarClass").click(function () {
    $("#teste3").removeClass("alert-sucess").addClass("alert-primaty");
    $("#alterarClass").removeClass("btn-success").addClass("btn-danger");

});

$("#alternar1").hide();

$("#alternar1").click(function () {
    $("#link").attr({
        "href" : "https://www.cps.sp.gov.br",
        "title" : "CPS"
    });
    $("#link").text("CPS");
    $("#alternar1").hide();
    $("#alternar2").show();
});

$("#alternar2").click(function () {
    $("#link").attr({
        "href" : "https://etecitu.cps.sp.gov.br/",
        "title" : "Etec Itu"
    });
    $("#link").text("Etec Itu");
    $("#alternar2").hide();
    $("#alternar1").show();
});
