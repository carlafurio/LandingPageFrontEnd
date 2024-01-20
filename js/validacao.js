function validaCad() {
    var nome = $("#nome").val();
    var email = $("#email").val();
    var senha = $("#senha").val();
    var repsenha = $("#repsenha").val();

    var verificador = true;
    var campos = "";

    if (nome.trim() == '') {
        campos = "NOME\n";
        $("#divNOME").addClass("has-error");
        verificador = false;
    } else {
        $("#divNOME").removeClass("has-error").addClass("has-success");
    }
    if (email.trim() == '') {
        campos = "E-MAIL\n";
        $("#divEMAIL").addClass("has-error");
        verificador = false;
    } else {
        $("#divEMAIL").removeClass("has-error").addClass("has-success");
    }
    if (senha.trim() == '') {
        campos += "SENHA\n"
        $("#divSENHA").addClass("has-error");
        verificador = false;
    } else {
        $("#divSENHA").removeClass("has-error").addClass("has-success");
    }
    if (repsenha.trim() == '') {
        campos += "REPETIR SENHA\n"
        $("#divREPSENHA").addClass("has-error");
        verificador = false;
    } else {
        $("#divREPSENHA").removeClass("has-error").addClass("has-success");
    }

    if (!verificador) {
        alert("Preencher os campos: \n" + campos);
    }

    return verificador;
}