//destructuring assignment is a javascript syntax
//which allows you to take properties of objects and
//give them to variables.

//old way
var voxel = { x: 5.6, y: 11, z: 22 };

// var x = voxel.x;    // x = 5.6
// var y = voxel.y     // y = 11
// var z = voxel.z     // z = 22

// The above would be the old way of assigning 
// an object's properties to variables.

//The more concise way that Destructuring allows you to do is below.
//console.log('values without destructuring:\t' + x + ' ' + y + ' ' + z)

// const {x,y,z} = voxel;

// const {x : a, y: b,z : c} = voxel;

// // console.log('values with destructuring in place:\t' + x + ' ' + y + ' ' + z);
// console.log(a)

//ASSIGNING VARIABLES FROM NESTED OBJECTS

//Object of 'nest' with a 'start' and an 'end' object inside of it.
const nest = {
    start: {
        x: 5,
        y: 6
    },
    end: {
        x:6,
        y:-9
    }
};

//The beloy takes the start object from above and reassigns variables of 'x' and 'y' from the 'start' object
//and assigns them to variables of a new name called 'startX' and 'startY'.
const {start : {x: startX, y: startY}} = nest;
console.log(startX)

//rest operator
const [q, r, ...rest] = [1,2,3,4,5];
console.log(q, r)
console.log (rest)

//the above output will be the following:
//          1 2
//          [ 3, 4, 5 ]

//Passing an object as a function's parameters.

//before destructuring
const passportUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
}
//do some thing with these variables

//AFTER RESTRUCTURING
const passportUpdate = ({ name, age, nationality, location}) => {

}
//name,age,nationality,location all get passed in as the parameter directly in here.