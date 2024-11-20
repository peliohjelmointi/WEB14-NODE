//const fs = require('fs') //file system

//luetaan tiedosto synkronisesti
// synonyymi 'blokkaava' ~ synkroninen
// const file = fs.readFileSync('./vitsikirja.txt','utf-8')
// console.log(file)

//asynkroninen tapa:
// const file2 = fs.readFile('./vitsikirja.txt','utf-8', (error, success) =>{
// if(error){ //tiedoston luku ei onnistunut
//     console.log(error)
//     return
// }
// // tähän määritys, mitä tapahtuu, jos tiedoston luku onnistuis
// console.log("luku onnistui:",success)
// })

const fs = require('fs').promises
async function PrintFile(path){
    try{
        const file3 = await fs.readFile('vitsikirja.txt','utf-8')
        console.log(file3)
    }
    catch(err){
        console.log(err)
    }
}

PrintFile('./vitsikirja.txt')
// ohjelma jatkaisi suorittamista tästä, jos
// jos tiedoston lukeminen kestäisi kauan
