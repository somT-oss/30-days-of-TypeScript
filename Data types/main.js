var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
// Enum  
// const ColorRed = 1;
// const ColorGreen = 2;
// const ColorBlue = 3;
var Person;
(function (Person) {
    Person["Name"] = "Somto";
    Person["School"] = "Unilag";
    Person[Person["Age"] = 17] = "Age";
})(Person || (Person = {}));
;
var username = Person.Name;
console.log(username);
