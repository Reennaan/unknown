window.onload = function test(){


    let isClickable = true;
    const paper = document.getElementById('red-paper')

    paper.addEventListener("click", () => {
        
        if (isClickable) {
            const save = new Audio('sounds/save.mp3');
            save.play();
           showSnackbar();
            
            isClickable = false;
            setTimeout(() => {
                isClickable = true; 
            }, 1000);
        }
    });


}

// Função para mostrar o snackbar
function showSnackbar() {
    const snackbar = document.getElementById("snackbar");
    snackbar.className = "snackbar show"; // Adiciona a classe para exibir o snackbar

    // Depois de 3 segundos (tempo da animação), remove a classe para esconder
    setTimeout(function() {
        snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
}







