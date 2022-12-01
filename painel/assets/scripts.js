function removerElementoPorId(idElemento) {
    let elemento = document.getElementById(idElemento)

    if(elemento != null) {
        elemento.remove()
    }
    
}

// function removeErrorMessage(){

//     let errorMessage = document.getElementById("error_msg")

//     if (errorMessage != null) {
//         errorMessage.remove()
//     }

// }

// function excluirJogo(idJogo) {
//     let excluirJogo = confirm("Realmente deseja excluir esse jogo")

//     if (excluirJogo == true) {
//         window.open("jogos_excluir.php?id=" + idJogo, "_SELF")
//     }
// }

// function excluirIdioma(idJogo) {
//     let excluirIdioma = confirm("Deseja excluir esse idioma?")

//     if (excluirIdioma == true) {
//         window.open("idioma_excluir.php?id=" + idJogo, "_SELF")
//     }

// }

// function excluirPlataforma(idJogo) {
//     let excluirPlataforma = confirm("Deseja excluir essa plataforma?")

//     if (excluirPlataforma == true) {
//         window.open("plataforma_excluir.php?id=" +idJogo, "_SELF")
//     }

// }