let person= {
    name: "kugan",
    age:26,
    address:"57/1 main street",
};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.address);

console.log(person["name"]);
console.log(person["address"]);
console.log(person["age"]);

person.name="Aijth";
console.log(person);
person["address"]="46/1 nadu street";
console.log(person);

person.gender="Male";
person["Work experience"]="2 year";
console.log(person);

let personWithNestedobj= {
    name: "Mr guna",
    age: 27,
    address: "93/2 nehur street",
    isMarried: false,
    sibling:{
        firstSibling: {
            name: "Bharth",
            age: 25
        },
        secondSibling:{
            name: "ram",
            age: 15
        },
    }
} 
console.log(personWithNestedobj.sibling.firstSibling.name);
console.log(personWithNestedobj["sibling"]["secondSibling"]["name"]);
console.log(typeof person);

let emptyArr=[];
let favColor=["red","purple","brown"];
let favNumber=[1,2,3,4,5];
let persons=[{name: "vijai", age:22},{name:"das",age:20}];
let wholeNumber=[1,"3",4,5,[1,2,3,4],{name: "thiru", age:18},true];

console.log(emptyArr);
console.log(favColor);
console.log(favNumber);
console.log(persons);

console.log(favColor[0]);
console.log(favNumber[1]);
console.log(persons[1]);

favNumber[0]=6;
console.log(favNumber[0]);

favNumber[6]=7;
console.log(favNumber);
console.log(favNumber[5]);

console.log(wholeNumber[4][2]);
console.log(wholeNumber[5]["name"]);
console.log(wholeNumber);
console.log(wholeNumber.length);

function printMyname() {
    console.log("Aijth","Kugan");
}
printMyname();

function addTwoNumber() {
    let firstNumber=45;
    let secondNumer=55;
    let result=firstNumber+secondNumer;
    console.log(result);
}
addTwoNumber();

function add(firstNumber,secondNumer) {
    let result=firstNumber+secondNumer;
    console.log(result);
}
add(80,200);

let MulitpleTwoNumber= (x,y) => {
    let result=x*y;
    console.log("MultipleTwoNumber", result);
}
MulitpleTwoNumber(45,35)

let divideTwoNumber=(firstNumber,secondNumer) =>{
    let result=firstNumber/secondNumer;
    return result;
}
let dividereult=divideTwoNumber(4,7);
console.log(dividereult);