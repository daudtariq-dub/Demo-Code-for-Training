//Hoisting

console.log(a);

var a = 10;

//console.log(b);
let b = 20;

//console.log(c);

const c = 30;

//array methods

const numbers = [1,2,3,4,5];

//map->transforms array

const doubled = numbers.map (num=>num*2);
console.log("map:",doubled)

//filter -> filters values 

const even = numbers.filter(num=>num%2==0);
console.log("Filtered array:",even);

//reduce -> single value

const sum = numbers.reduce((acc,curr)=>acc+curr,0);
console.log("reduce:",sum);

//find->first matching element
const found = numbers.find (num=>num>3);
console.log("find:",found);

//callBacks
function processUser(name,callback)
{
    console.log("Processing User");
    callback(name);
}
function greet(name)
{
    console.log("Hello",name);
}
processUser("Ali",greet);

//MacroTasks
setTimeout(()=>{
    console.log("setTimeout Executed");
},1000);

let count = 0; 
const interval = setInterval (()=>{
    count++;
    console.log("setInterval count:",count);

    if(count === 3)
    {
        clearInterval(interval);
    }
},1000);

//promise 

const myPromise = new Promise((resolve,reject)=>{
    const success = true; 
    setTimeout(()=>{
        if (success){
            resolve("Promise fulfilled");
        }
        else {
            reject("Promise rejected");
        }
    })
},1000)

myPromise
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log (error);
})
.finally(()=>{
    console.log("Promise finished");
});

//Promise Chaining

Promise.resolve(5)
.then(num=>num*2)
.then(num=>num*2)
.then(result=>console.log("Promise chain:",result));

//async/await

function fetchData()
{
    return new Promise (resolve=>{
        setTimeout(()=> {
            resolve("Data received");
        },1000);
    });
}

async function getData()
{
    const data = await fetchData();
    console.log("aync/await:",data);
}

getData();

//fetch

fetch("https://jsonplaceholder.typicode.com/users/1")
.then(res=>res.json())
.then(data => console.log ("fetch:",data.name))
.catch(err => console.log (err));

//prototypes

function User(name)
{
    this.name=name;
}

User.prototype.sayHellow = function ()
{
    console.log("Hello my name is: ", this.name);
};

const user1 = new User ("Ali");
const user2 = new User ("Daud");

user1.sayHellow();
user2.sayHellow();

console.log(user1.__proto__===User.prototype);


//queuemicrotask

queueMicrotask(()=>{
    console.log("queue micro task executed");
});
