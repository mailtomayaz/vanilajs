/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Js object learning create object

var obj = {
    a: "Hello world",
    b: 42,
    c: true
}

//get value of object
obj.a
obj.b
obj.c
document.write(obj.a + ':' + obj.b + ':' + obj.c);

//we can get object value by obj['a'] as well

obj['a'];
obj['b'];
obj['c'];

document.write(obj['a'] + ':' + obj['b'] + ':' + obj['c']);

// check type of the variable string,object,array etc

document.write(typeof obj.a);

// declearing array in javascript
var arr = [
    'hello world',
    42,
    true
];

//get data from array

document.write(arr[0] + ':' + arr[1] + ':' + arr[2])

//check the length of array 
document.write(arr.length);

//js functions

function foo() {
    return 42;
}
foo.bar = "Hello World !";
typeof foo;//function
typeof foo();//number
typeof foo.bar;//string

document.write(typeof foo + ":" + typeof foo() + ':' + typeof foo.bar);

//built-in type methods
var a = "Hello World!";
var b = "3.14159";
//a.length;//11
//a.toUpperCase();//
//b.toFixed(4);

document.write(a.length + ":" + a.toUpperCase() + ':' + b.toString());

//strict equality of the variables
var a = 15;
var b = "15";
//check equality

if (a == b)
    true;
else {
    false;
}

//equality inequality

var a = [1, 2, 3];
var b = [1, 2, 3];
var c = "1,2,3";

var test = a == c;
console.log(typeof a + '----' + typeof b);
console.log(test);

// inequality string
var test2 = 'c' < 'd';
console.log(test2);

//hoisting

var a = 2;
foo(); // works because `foo()` // declaration is "hoisted"
function foo() {
    a = 3;
    console.log(a); // 3
    var a; // declaration is "hoisted"
// to the top of `foo()`
}
console.log(a);// 2

//Nested scopes
function foo() {
    var a = 1;
    function bar() {
        var b = 2;
        function baz() {
            var c = 3;
            console.log(a, b, c); // 1 2 3
        }
        baz();
        console.log(a, b);// 1 2
    }
    bar();
    console.log(a);// 1
}
foo();

//strict mode

function foo() {
    "use strict";
// this code is strict mode
    function bar() {
// this code is strict mode
    }
}

//"use strict";
function foo() {
// this code is strict mode
    function bar() {
// this code is strict mode
    }
}
// this code is strict mode

function foo2() {
    "use strict";
    a = 1;
}
// turn on strict mode
// `var` missing, ReferenceError
foo2();

//function as values

var x = function () {
    // this is anonymous function assign to variable 
    console.log('anonymouse fuction call');
}
var t = function bar() {
    //named function expression.
    console.log('named fuction call');
}
//execute anonymous function
x();
//execute named function
t();
//Immeditately invoke function expressions (IIFEs)  this function will exectue automaticly when page loads

(function IIFE() {
    console.log('Helloo! I am IIFES');
})();


//closure

function showName(firstName, lastName) {

    var nameIntro = "Your name is ";
    // this inner function has access to the outer function's variables, including the parameter​
    function makeFullName() {

        return nameIntro + firstName + " " + lastName;

    }

    return makeFullName();

}


console.log(showName("Michael", "Jackson")); // Your name is Michael Jackson 
console.log(showName("Muhammad", "Ayaz")); // Your name is Michael Jackson 

// module with closure

 function user() {
     var userName, password;
     function doLogin (user, pw) {
         username = user;
         password = pw;
         //do the rest of the login work
     }
     var publicApi = {
         login: doLogin
     };
     return publicApi
 }
 
 //create user moduel instance
 
 var fred = user();
 fred.login('fred','admin123');
 
 //this identifier
 
 function foo () {
     console.log( this.bar);
      }
      
      var bar ='global';
      var obj1 = {
          bar: "obj1 bar property",
          foo: foo
      };
      var obj2 = {
          bar : "obj2 bar property"
      }
      foo();// global
      obj1.foo(); // it will foo property of the foo function  that will display this.bar value that is "obj1 bar property"
      foo.call(obj2); //it wiall call the foo function and bar property of function.
      new foo();
      
      //prototype in javascript
      var foo4 = {
          a: 42
      };
      
      //create bar and link into foo
      
      var bar = Object.create(foo4);
      bar.b = "Hello World";
      console.log(bar.b ); //hello world
      console.log(bar.a); // 42 <-- delag
      
      //scopes 
function foo(a){
    return a + b;
}

b = 2;
document.write('<br>-----')
document.write(foo(2));
//CCCCCCCCCCCCCCCCCCCCCCC

/*This Key word and its uses*/
function identify(){
    //var greeting = "hello i am " + identify(context);
    console.log(this.name.toUpperCase());
    return this.name.toUpperCase();
}

function speak(){
    var greeting = "Hello i am " + identify.call(this);
    console.log(greeting);
}

var me = {
    name: "Muhammad"
}
var you = {
    name: "Sikandar"
}
identify.call(me);
//identify.call(you);
speak.call(me);
//speak.call(you);
