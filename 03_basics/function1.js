function myName() {
    console.log("Muhammad Ali");
}

// console.log(myName());

function addTwoNumbers(number1, number2) {
    return number1 + number2
}

// console.log('Result = ',addTwoNumbers(8, 5))

function loginMessage(username) {
    // return `${username} is just logged in` this is not run because we don't print or console it
    return `${username} is just logged in`
}

// console.log(loginMessage("Ali"))

function calculatePrice(val1,val2,...numb1)       // in this line ... these three dots are called rest and spread operator difference is just this between spread and rest operator that is usage of that 
{
    return numb1;
}

// console.log(calculatePrice(200, 500, 66,300,400));
// in the above line val1 and val2 is when initialize then 200 and 500 is given to that, that's why they are not show

const user = {
    username: 'Hitesh',
    password : 199
}

function handleObject(anyobject)
{
    console.log(`My Username is ${anyobject.username} and password is ${anyobject.password}`);
}

// handleObject(user)  // this line is also can write just below format

// handleObject({
//     username: 'sam',
//     password: 299
// })

// const newArray = [90,80,70,60,50]

function howGetArray(getArray){
return getArray[8]
}

// console.log(howGetArray(newArray));          //just like this below is also correct format
console.log(howGetArray([90,80,70,60,50]));
