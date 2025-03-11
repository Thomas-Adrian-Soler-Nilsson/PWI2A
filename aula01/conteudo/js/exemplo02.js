$("#alternar2").hide();
$("#alternar3").hide();

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
    $("#alternar3").show();
});

$("#alternar3").click(function () {
    $("#link").attr({
        "href" : "https://fatecitu.cps.sp.gov.br/",
        "title" : "Fatec Itu"
    });
    $("#link").text("Fatec Itu");
    $("#alternar3").hide();
    $("#alternar1").show();
});