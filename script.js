

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

    const Webamp = window.Webamp;
    if(!Webamp.browserIsSupported()) {
        alert("Oh no! Webamp does not work!")
        throw new Error("What's the point of anything?")
    }
    
    
    // All configuration options are optional.
    const webamp = new Webamp({
      // Optional.
      initialTracks: [{
        metaData: {
          artist: "Final Fantasy IX",
          title: "Fairy Battle",
        },
        // NOTE: Your audio file must be served from the same domain as your HTML
        // file, or served with permissive CORS HTTP headers:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
        // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
        url: "sounds/fairy-battle.mp3"
      }],
      initialSkin: {
        url: "img/DJ_LAIN_Serial_ExP_2.wsz"
      },
    });
    
    webamp.renderWhenReady(document.getElementById('winamp-container'));


}


function showSnackbar() {
    const snackbar = document.getElementById("snackbar");
    snackbar.className = "snackbar show"; 

    setTimeout(function() {
        snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
}







