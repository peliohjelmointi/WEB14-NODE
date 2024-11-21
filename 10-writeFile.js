// luo funktio (synkroninen), joka saa parametrina tiedoston nimen ja
// luo kyseisen tiedoston samaan kansioon.
// Kutsu funktiota. Voit asettaa tiedostoon kirjoitettavan tekstin muuttujaan.

//const fs = require('fs')        //filename,    text to write , encoding
//const newfile = fs.writeFileSync('./uusi.txt','LOREM IPSUM','utf-8')

//Koita myös async-versiota.
const fs = require('fs').promises
async function writeToFile(filePath,text,encoding){
    try{
        await fs.writeFile(filePath,text,encoding)
        console.log("file written")
    }
    catch(error){
        console.log(error)
    }
}
const filePath = './toinen_uusi.txt'
const text = 'kohta kahville\neikö niin'
const encoding='utf-8'

writeToFile(filePath,text,encoding)