const path = require('path')

const baseName = path.basename(__filename) //__filename on tämä tiedosto
                                        // basename on pathin(polun) viimeinen osa
console.log("BASENAME:",baseName)

const dirName = path.dirname(__filename) //hakemistosijainti ilman tiedoston nimeä
console.log("DIRNAME:",dirName)

console.log("__filename",__filename)
console.log("__dirname",__dirname)
                       // directory + /texts/ + tiedoston nimi
const htmlPath = path.join(__dirname,'../../folderX/','index.html')
console.log(htmlPath)
