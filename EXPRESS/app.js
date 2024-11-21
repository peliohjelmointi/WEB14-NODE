const express = require('express')
const sanonnat = require('./sanonnat')
const lodash = require('lodash')
const path = require('path')

const app = express() //initialisoidaan ohjelma express-applikaatioksi

    /*TEHTÄVÄ 1
    Vie sanonnat-muuttuja app.js -tiedostoon ja 
    näytä yksi sanonnoista satunnaisesti localhost:3000/ -osoitteessa
    (niin, että kun sivun päivittää,niin arpoo aina uuden sanonnan 
    sanonnat.js -tiedostosta)
    Vinkki: Käytä Math-kirjastoa satunnaiseen valintaan   
*/

    //tehdään reititys / -osoitteeseen:
app.get('/', (req,res)=>{
    //res.send = res.write + res.end
    //res.send('HELLO WORLD')
    //res.send(sanonnat[Math.floor(Math.random()*sanonnat.length)])
    //tai
    res.send(lodash.sample(sanonnat)) //valitsee yhden satunnaisesti
    
    //lodash -esimerkkejä: (npm i lodash)
    // const lista = [1,2,3,4,5,6]
    // lodash.chunk(lista,2) // [[1,2],[3,4],[5,6]]
    // const shuffled_lista = lodash.shuffle(lista) //sekoittaa järjestyksen
    // lodash.uniq //palauttaa vain uniikit(ei duplikaatteja) 
})
    /*TEHTÄVÄ 2
    Luo toinen reitti  /index, johon mentyään käyttäjälle
    näytetään html-kansiosta löytyvä index.html -sivun sisältö
    Käytä res.sendFile -funktiota
    */
app.get('/index', (req,res) =>{
    res.sendFile(path.join(__dirname,"html","index.html"))
})

// portin kuuntelu
app.listen(3000, ()=>{
    console.log("server running, listening port 3000")
})

