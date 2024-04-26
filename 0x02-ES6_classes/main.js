//1

// import ClassRoom from "./0-classroom.js";
// const room = new ClassRoom(10);
// console.log(room._maxStudentsSize)


// 2

// import initializeRooms from './1-make_classrooms';
// console.log(initializeRooms());


//3

import HolbertonCourse from "./2-hbtn_course";

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"])
console.log(c1.name);
c1.name = "Python 101";
console.log(c1);

try {
    c1.name = 12;
} 
catch(err) {
    console.log(err);
}

try {
    const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
}
catch(err) {
    console.log(err);
}
