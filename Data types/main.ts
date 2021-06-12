let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];

// Enum  this is a function that is used to decalare a data set, it's more cleaner to write it in typescript than JavaScript


enum Person { Name = "Somto", School = "Unilag", Age = 17 };
 let username = Person.Name; 
console.log(username);