class Greetings{

    Hello(){
        console.log("HELLO WORLD!")
    
    }

     Moro(){
        console.log("MORO")
    }
}

G = Greetings()
G.Moro()
G.Hello()

//Hello() 
               //*          **
module.exports.HelloWorld = Hello
module.exports.Moro = Moro

//toisesta tiedostosta voidaan kutsua Hello-funktiota HelloWorld()-nimellä

/*
* = Millä (alias)nimellä funktiota voidaan kutsua toisesta moduulista
** = Mitä moduulin funktiota kutsutaan
*/