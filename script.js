

window.onload = function test(){


    let isClickable = true;
    const paper = document.getElementById('red-paper')

    paper.addEventListener("click", () => {
        
        if (isClickable) {
            const status = document.getElementById("save-game")
            status.style.color = "green"
            status.textContent = " Saved"
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
        width: "200px",  // Largura da janela
        height: "150px"  // Altura da janela
    }

    });
    
    webamp.renderWhenReady(document.getElementById('winamp-container'));
    webamp.appendTracks([
      {url: 'sounds/into-the-depths-catacombs.mp3'},
      {url: 'sounds/fallen-down.mp3'},
    ]);

    setTimeout(() => {
      const skin = document.querySelector("#winamp-container canvas");
      if (skin) {
          skin.style.width = "200px";
          skin.style.height = "auto";
      }
  }, 1000);



    
    

    topArtists();

}


function showSnackbar() {
    const snackbar = document.getElementById("snackbar");
    snackbar.className = "snackbar show"; 

    setTimeout(function() {
        snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
}

async function  topArtists(){
  
  const urlTracks = "https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=Shalashaska-&api_key=0929ed3fd3c3e7b2319317afda26a1cc&format=json&period=7day&limit=5"
  const lastWeek = document.querySelector("#last-week");

  fetch(urlTracks).then(response =>{
    return response.json();
  }).then(data =>{
      data.toptracks.track.forEach(track => {
       
      
 
       
       const artist = document.createElement("div");
       artist.style.display = "flex";
       artist.style.alignItems = "center";
       artist.style.fontSize = "15px"
 
       const imgArtist = document.createElement("img");
       imgArtist.src = track.image.find(img => img.size === "large")["#text"];
       imgArtist.style.width = "20px";
       imgArtist.style.height = "20px";
       imgArtist.style.borderRadius = "50%";

       
 
       const artistText = document.createElement("span");
       artistText.textContent = track.artist.name;
 
      
       artist.appendChild(imgArtist);
       artist.appendChild(artistText);
 
       
       //lastWeek.appendChild(artist);
    });;
    //console.log(artistName);
  }).catch(error =>{
    console.error("deu ruim");
  })

  topAlbums();

}

async function topAlbums(){
  albumUrl = "https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=Shalashaska-&api_key=0929ed3fd3c3e7b2319317afda26a1cc&format=json&limit=5&period=7day";
  const lastWeek = document.querySelector("#last-week");
  

  fetch(albumUrl).then(data =>{
    return data.json().then(albums =>{
      albums.topalbums.album.forEach(album =>{

        console.log(album.name)
        const albumContent = document.createElement("div")
        albumContent.id = "album-content"
        albumContent.style.display = "flex"
        albumContent.alignItems = "center"
        albumContent.fontSize = "0.9375rem"
        


        const albumImg = document.createElement("img")
        albumImg.src = album.image.find(img => img.size === "large")["#text"]
        albumImg.width = 35
        albumImg.height = 35
        albumImg.style.padding = "5px"
        albumImg.borderRadius = "50%"

        console.log(albumImg.src)

        const albumName = document.createElement("span")
      
        albumName.style.display = "inline-block";
        albumName.style.alignContent = "start"
        albumName.style.padding = "0.3125rem"
        albumName.style.marginTop = "0.3125rem"

        
        
        if(album.name.length <= 29){
          
          albumName.textContent = album.name
          albumContent.appendChild(albumImg)
          
          albumContent.appendChild(albumName)
          
          
        }else{
          const marquee = document.createElement("marquee")
          marquee.textContent = album.name
          marquee.style.width = "12.5rem"
          marquee.style.marginTop = "0.625rem"
          albumContent.appendChild(albumImg)
          albumContent.appendChild(marquee)

        }
      

        lastWeek.appendChild(albumContent)

        
      })
    })
  })
}






