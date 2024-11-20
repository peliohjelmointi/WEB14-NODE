const Person = require('./5-class')
//Person-muuttujaan sijoitetaan Person-luokka

//Luodaan Person-luokasta olio, nimeltään P
const P = new Person("Mary-Ann",50)

//Kutsutaan P-olion metodian PrintPersonInfo
P.PrintPersonInfo()