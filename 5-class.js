class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }
    PrintPersonInfo(){ //huom. EI function,koska metodi
        console.log(`Hello ${this.name}`)
    }
}

const JP = new Person("John-Peter",30)
JP.PrintPersonInfo()

module.exports = Person

//HARJOITUS: TEE TOINEN TIEDOSTO JA TUO Person-luokka
// SIIHEN TIEDOSTOON. Luo Person-luokasta olio nimeltään P,
//ja kutsu olion PrintPersonInfo()
