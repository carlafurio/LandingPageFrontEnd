//Valicacoes e tratativas de campo

function validarFormulario(){
    if(document.form.nome.value == ''){
        alert("Preencher o campo obrigatório NOME");
        document.form.nome.focus();
        return false;
    }

    if(document.form.email.value == ''){
        alert("Preencher o campo obrigatório E-MAIL");
        document.form.email.focus();
        return false;
    }
    if(document.form.assunto.value == ''){
        alert("Preencher o campo obrigatório ASSUNTO");
        document.form.assunto.focus();
        return false;
    }
    if(document.form.msg.value == ''){
        alert("Preencher o campo obrigatório MENSAGEM");
        document.form.msg.focus();
        return false;
    }
}