// const tinderUser = new Object() // singleton object
const tinderUser = {}       //non singleton object
tinderUser.id = '123abc'
tinderUser.name = 'Sam'
tinderUser.isLoggedIn = true

const firstUser ={
    email: 'some@gmail.com',
    name: {
        fullName: {
            firstName: 'Sam',
            lastName: 'Jimmy',
        }
    }
}

// console.log(firstUser.name.fullName.lastName);
// console.log(tinderUser);

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}
const obj3 = {5: 'a', 6: 'b'}

// const obj4 = Object.assign({},obj1,obj2,obj3) // first one is empty because according to documentation first one is target second one is source

const obj4 ={...obj1,...obj2} //spread operator

// console.log(obj4);

const users =[
    {
        id: 1,
        email: 'h@gmail.com'
    },
    {
        id: 2,
        email: 'h2@gmail.com'
    },
    {
        id: 3,
        email: 'h3@gmail.com'
    }
]

// console.log(users[1].email);
// console.log(tinderUser); //object type
// console.log(Object.keys(tinderUser)); //convert datatype into array
// console.log(Object.values(tinderUser)); //convert datatype into array

// console.log(Object.entries(tinderUser)); //gives values in nested array
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //check value is occur in array or not.

const course = {
    courseName: "Web Development",
    price: 999,
    courseInstructor: "Hitesh"
}

// course.courseInstructor;

const {courseName: Name} = course;     //its called distructuring      //using : change the courseName to Name
// console.log(courseName);
console.log(Name);


