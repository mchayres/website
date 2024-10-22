function navigateTo(screenId) {
    // Esconde todas as telas
    document.querySelectorAll('.screen').forEach(screen => {
        screen.style.display = 'none';
    });

    // Mostra a tela desejada
    document.getElementById(screenId).style.display = 'block';
}
