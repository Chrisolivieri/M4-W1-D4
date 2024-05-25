/*
LINK API

https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem
https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica 
https://striveschool-api.herokuapp.com/api/deezer/search?q=queen
*/



function eminem() {

    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")

        .then(response => {   //facciamo una richiesta all'url e in response mettiamo la risposta, response è una variabile
            return response.json() //facciamo il json della risposta, json è il modo di formattare i dati
        })
        .then(pippo => {  //mettiamo la risposta nella variabile pippo
            pippo["data"]/*oppure .data*/.forEach(element => { // element è una variabile
                
                
                let gigio = document.querySelector("#eminemSection")
                let lista = document.createElement("ol")
                let cover = document.createElement("img")

                
                lista.innerHTML = element.title
                cover.src = element.album.cover

                lista.appendChild(cover)
                gigio.appendChild(lista)


            })

        })

}


function metallica() {

    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")

        .then(response => {   //facciamo una richiesta all'url e in response mettiamo la risposta, response è una variabile
            return response.json() //facciamo il json della risposta, json è il modo di formattare i dati
        })
        .then(pippo => {  //mettiamo la risposta nella variabile pippo
            pippo["data"]/*oppure .data*/.forEach(element => { // element è una variabile
                
                
                let gigio = document.querySelector("#metallicaSection")
                let lista = document.createElement("ol")
                let cover = document.createElement("img")

                
                lista.innerHTML = element.title
                cover.src = element.album.cover

                lista.appendChild(cover)
                gigio.appendChild(lista)


            })

        })

}


function queen() {

    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")

        .then(response => {   //facciamo una richiesta all'url e in response mettiamo la risposta, response è una variabile
            return response.json() //facciamo il json della risposta, json è il modo di formattare i dati
        })
        .then(pippo => {  //mettiamo la risposta nella variabile pippo
            pippo["data"]/*oppure .data*/.forEach(element => { // element è una variabile
                
                
                let gigio = document.querySelector("#queenSection")
                let lista = document.createElement("ol")
                let cover = document.createElement("img")

                
                lista.innerHTML = element.title
                cover.src = element.album.cover

                lista.appendChild(cover)
                gigio.appendChild(lista)


            })

        })

}

function search() {
    let artist = document.getElementById("searchField").value
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist)
        .then(response => {
            return response.json()
        })
        .then(pippo => {
            pippo.data.forEach(element => {
                
                document.getElementById("searchResults").style.display = "block"

                let gigio = document.querySelector("#search")
                let lista = document.createElement("ol")
                let cover = document.createElement("img")
                
                
                
                lista.innerHTML = element.title
                cover.src = element.album.cover
                
                
                lista.appendChild(cover)
                gigio.appendChild(lista)
            });
 
        })
        let gigio = document.querySelector("#title")
        let titolo = document.createElement("h2")
        titolo.innerHTML = artist
        gigio.appendChild(titolo)
}

//INPUT MODIFICA URL PER FARE RICERCA RANDOM

