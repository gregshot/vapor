function removeErrorMessage(){

    let errorMessage = document.getElementById("error_msg")

    if (errorMessage != null) {
        errorMessage.remove()
    }

}

function excluirJogo(idJogo) {
    let excluirJogo = confirm("Realmente deseja excluir esse jogo")

    if (excluirJogo == true) {
        window.open("jogos_excluir.php?id=" + idJogo, "_SELF")
    }
}

function excluirIdioma(idJogo) {
    let excluirIdioma = confirm("Deseja excluir esse idioma?")

    if (excluirIdioma == true) {
        window.open("idioma_excluir.php?id=" + idJogo, "_SELF")
    }

}