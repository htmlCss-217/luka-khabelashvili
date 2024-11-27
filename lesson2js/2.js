//ts@check
//1
let variable=[1,4,6,77];
if (Array.isArray(variable)){
    console.log('variable is an array');
}
else{
    console.log('variable is not an array');
}
//2
console.log(variable.at(2));
//3
console.log(variable.at(-1));
//4
let color=["red",'blue','orange','yellow','geen','black'];
let  o=['th', 'st', 'nd', 'rd']
//5
console.log(`1${o.at(1)} choice is ${color[2]}.`);
console.log(`2${o.at(1)} choice is ${color[0]}.`);
console.log(`3${o.at(3)} choice is ${color[-1]}.`);
//6
let person={
    firstName:'luka',
    lastName: 'khabelashvili',
    age: '21',
    profession: 'boxer',
    hobby: "gym",
    height: "195cm",
}
student.height= '193cm';
console.log(person);
