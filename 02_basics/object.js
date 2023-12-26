
const mySymbol = Symbol("key")

const JsUser ={
    name: "Muhammad Ali",
   [mySymbol]: "key",
    age: 19,
    email: "imbalti5@google.com",
    address: "Skardu"
}

// console.log(JsUser.email);
// console.log(JsUser[mySymbol]);
// console.log(JsUser["address"]);

JsUser.address = "MTP-92 Satellite Town Skardu"
// Object.freeze(JsUser);
// console.log(JsUser);

JsUser.address = "MTP-92 Satellite Town Kharmang"

JsUser.greetingOne = function(){
    console.log("Hello ");
}

JsUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`);
}

console.log(JsUser.greetingOne());
console.log(JsUser.greetingTwo());