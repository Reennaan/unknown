

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
    
    const webamp = new Webamp({
      
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
        url: "img/Lain_Open_the_Next.wsz"
      },
      initialDimensions: {
        width: 200,  // Largura da janela
        height: 150  // Altura da janela
    }

    });
    
    webamp.renderWhenReady(document.getElementById('winamp-container'));
    webamp.appendTracks([
      {url: 'sounds/into-the-depths-catacombs.mp3'},
      {url: 'sounds/fallen-down.mp3'},
    ]);



    
    

    weekAlbuns();

}


function showSnackbar() {
    const snackbar = document.getElementById("snackbar");
    snackbar.className = "snackbar show"; 

    setTimeout(function() {
        snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
}

async function  weekAlbuns(){
  
  const urlAlbuns = "https://ws.audioscrobbler.com/2.0/?method=user.getweeklyalbumchart&user=Shalashaska-&api_key=0929ed3fd3c3e7b2319317afda26a1cc&format=json"

  fetch(urlAlbuns).then(response =>{
    return response.json();
  }).then(data =>{
    console.log(data);
  }).catch(error =>{
    console.error("deu ruim");
  })

}







