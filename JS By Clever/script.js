console.log('hello');
console.log('hello');
// alert('yooo')
//How to write a comment 

//Variables
var b='smoothie';
console.log(b);

var someNumber=45;
console.log(someNumber);

// var age=prompt('What is your age?');
// document.getElementById('someText').innerHTML=age;

// Numbers in javascript
var num1 = 10;

//Increment num1 by 1
num1 =num1+1;

//Decrement num1 by 1
num1=num1-1;
console.log(num1);

//Divide ,Multiply *,remainder %
console.log(num1%6);

//Increment/Decrement by any number you want
num1 +=10;
console.log(num1)

/*FUNCTIONS
1.Create a function
2.Call a function
*/
function fun() {
    console.log('this is a function');

}

//Call
fun();

/*Let's create a function that takes in a name and 
says hello followed by your name

for example

Nmae:"Yunus"
Return:"Hello Yunus"
*/

function greeting(yourName){
    var result='Hello '+yourName; //string concatination
    console.log(result);
}

//var name=prompt('What is your name?');
//greeting(name);

//How do arguments work in function?
//How do we add two numbers in a function?

function sumNumbers(num1,num2){
    var result=num1+num2;
    console.log(result);
}

sumNumbers(10,10);

//While loops
/*
var num = 0;

while(num<100){
    num+=1;
    console.log(num);
}
*/

//for loop
for(let i=0;i<100;i++){
    console.log(i);
}

//Data types
let yourAge=18;//number
let yourName='Bob';//string
let name = {first: 'Jane', last: 'Doe'};//object
let truth = false;//boolean
let groceries = ['apple','banana','oranges'];//array
let randon;
let nothing =  null;//value null

//Strings in javascript (common method)
let fruit = 'banana,apple,orange,blackberry';
let moreFruits = 'banana\napple';      //new line

console.log(fruit.length);
console.log(fruit.indexOf('an'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban','123'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.charAt(2));
console.log(fruit.split(','));//split by comma
console.log(fruit.split(''));//split by space

//Array
let fruits=['banana','apple','orange','pineapple'];
fruits=new Array('banana','apple','orange','pineapple');

console.log(fruits[2]);

fruits[0]='pear';
console.log(fruits);

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//array common methods
console.log('to string',fruits.toString());
console.log(fruits.join('--'));
console.log(fruits.pop(),fruits);
console.log(fruits.push('blackberrys'),fruits);
console.log(fruits[4]);
fruits[4]='new fruits';
console.log(fruits);
fruits.shift(); //remove first element from a list
console.log(fruits);
fruits.unshift('kiwi');//add first element in array
console.log(fruits);
let vegetables=['asparagus','tomato','broccoli'];
let allGroceries = fruits.concat(vegetables); //combine arrays
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers =[5,10,2,25,3,255,1,2,5,334,321,2];
console.log(someNumbers.sort(function(a,b) {return a-b}));//sorted in ascending order
console.log(someNumbers.sort(function(a,b) {return b-a}));//sorted in descending order

let emptyArray = new Array();
for (let num=0;num<10;num++){
    emptyArray.push(num);
}
console.log(emptyArray);

//Objects in javascript
//dictionaries in python

let student={first:'Yunus', 
    last:'Siddique' ,
    age:20,
    height:180,
    studentInfo: function(){
        return this.first + '\n' +this.last  + '\n' + this.age;
    }
};
//console.log(student.first);
//console.log(student.last);
//student.first='notYunus'//change value
//console.log(student.first);
student.age++;
console.log(student.age);

console.log(student.studentInfo());

//Conditional , control flow (if else)
//18-35 is my target demographic
// && AND
// !! OR
let age=20;

if( (age >= 18) && (age<=35) ){
    status='target demo';
    console.log(status);
}else{
    status='not my audience';
    console.log(status)
}

//Switch Statements
//Differentiate between weekday vs. weekend
//day 0-->SUNDAY
//day 6-->SATURDAY
//day 4-->THURSDAY-->WEEKDAY
switch (6) {
    case 0:
        text='weekend';
        break;
    case 5:
        text='weekend';
        break;
    case 6:
        text='weekend';
        break;
    default:
        text='weekday';

}
console.log(text);