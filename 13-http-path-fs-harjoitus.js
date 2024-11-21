/*Luo projektiin kansio html, 
ja luo sinne index.html -tiedosto (jossa jotain tekstiä)
Käytä path-moduulia ja hae sen avulla index.html -tiedosto 
filename-nimiseen muuttujaan.

Luo serveri http-modulilla, 
ja lue tiedoston sisältö parametriin nimeltään data, 
ja näytä data-muuttujan sisältö localhost-serverillä portissa 4000.

VINKKEJÄ:

- käytä path.join
- lue tiedosto createServer -funktion sisällä, tee vaihtoehdot
  virheelle ja onnistumiselle, sijoita data onnistumisen parametriksi
- vie data sivulle responsessa 

*/

const http = require('http') //serverin luontiin
const fs = require('fs') // tiedoston lukuun
const path = require('path') // tiedoston noutamiseen kansiosta

const filename = path.join(__dirname,'html','index.html') //index.html löytyy

const server = http.createServer((req,res)=>{
  console.log(`Incoming request for: ${req.url}`); 
  fs.readFile(filename,(err,data)=>{
    if(err){
      console.log(err)
      res.end() //ilman tätä server.close() ei toimi!
      server.close()
    }
    else{
      console.log(`tiedosto ${filename} luettiin onnistuneesti`)
      res.end(data)
    }
  })
}).listen(4000)


//server.listen(4000)































/* ESIM 1:*/
// const http = require('http')
// const fs = require('fs').promises
// const path = require('path')

// const filename = path.join(__dirname,'texts','index.html')

// const server = http.createServer(async(req,res)=>{
//     try{
//         const data = await fs.readFile(filename)
//         res.end(data)
//     }
//     catch(err){
//         console.log(err)
//         res.statusCode=500
//         res.end('internal server error')
//     }


// }).listen(4000)


/*ESIM 2**/
// const http = require('http')
// const fs = require('fs').promises // Use promises API for async/await
// const path = require('path')

// const filename = path.join(__dirname, 'texts', 'index.html')

// async function CreateServer() {
//     const server = http.createServer(async (req, res) => {
//         try {
//             const data = await fs.readFile(filename) 
//             res.end(data)
//         } catch (err) {
//             console.error(err)
//             res.statusCode = 500 
//             res.end('Internal Server Error')
//         }
//     });

//     server.listen(4000)
// }


// CreateServer().catch(err => {
//     console.error('Failed to start server:', err);
// });

