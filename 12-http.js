const http = require('http')

const server = http.createServer( (req,res) => {
        if(req.url==='/'){
            //res.write('HELLO WORLD!')
            // voi kirjoittaa myös suoraan .end('teksti tähän'), mutta end vain kerran
            res.end('WELCOME TO MY PAGE!')
        }
        else if(req.url==='/about'){
            res.end('ABOUT PAGE')
        }
        else{
            res.end("404 - PAGE NOT FOUND")
        }
    
    })//.listen(3000) //toimii myös näin

    server.listen(3000)






// http.createServer( function akjldsf(req,res)  {
//     console.log("diibadaaba")
// }   )


// http.createServer( function (req,res)  {
//     console.log("diibadaaba")
// }   )


// 127.0.0.1:3000
// tai 
// localhost:3000

// CTRL+C sulkee serverin (minkä tahansa terminaalissa ajetun servicen/ohjelman)