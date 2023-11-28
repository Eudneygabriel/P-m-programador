function alternarVisibilidade() {
    var meuTexto = document.getElementById("meuTexto");

    // Verifica se o texto está visível
    if (meuTexto.style.display === "none") {
        // Se estiver oculto, mostra
        meuTexto.style.display = "block";
    } else {
        // Se estiver visível, oculta
        meuTexto.style.display = "none";
    }
}
