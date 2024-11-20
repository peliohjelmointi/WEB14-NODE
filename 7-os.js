//os = operating system
const os = require('os')

const userinfo = os.userInfo()

/*
LUO UUSI JAVASCRIPT-OBJEKTI, JOKA PITÄÄ 
SISÄLLÄÄN "key-value" -pareja os-kirjaston metodeista

const obj =...

console.log(obj)
{
    user : 'Kalle Sillanpää', //os.userinfo()
    os_type : 'Windows_NT'    //os.type
}

*/
// console.log(os.hostname())
// console.log(os.platform())
// console.log(os.release())
// console.log(os.type())
// console.log(os.uptime())

// MIHIN KÄYTTÄÄ os-kirjastoa?
/*


Esim:
1) cross-platform file-management (polkujen erot win vs linux)
2) lähiverkossa olevien laitteiden tunnistus
3) serverin konfigurointi tiettyyn ip-osoitteeseen
4) serverin optimointiin (kun tiedetään montako 
cpu-corea käytössä (os.cpus().length))
5) Laitteen päälläoloajan seuranta
6) Toiminnallisuus käyttöjärjestelmän mukaan
*/