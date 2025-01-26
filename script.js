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


function showSnackbar() {
    const snackbar = document.getElementById("snackbar");
    snackbar.className = "snackbar show"; 

    setTimeout(function() {
        snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
}







