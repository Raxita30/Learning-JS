var obj = {
    name:"faizan",
    roll_no:10,
    sing: function(){
        console.log(`${this.name} sings`);

    }
};
console.log(obj.name);
obj.sing();
console.log(obj["roll_no"]);

console.log("------------------------------------------")
console.log("arrays")
var  arr=[1,2,3,4,5];
console.log(arr[2]);

var arr1=[2,34,3,4,6,,99];
console.log(arr1[5]);

arr.push("faiz");

arr.push("taaz");
console.log(arr.pop());

arr.unshift(1000);
arr.unshift(10);
console.log(arr[0]);
console.log(arr.shift());

console.log(arr[1]);
console.log(arr[2]);
arr.splice(1,3,"999");

arr.splice(0,3);

var barr= [1,2,3,4,5,6];

var newbarr= barr.slice(0,4);

var carr=[1,2,3,4,5,6];
var newbarr = carr.slice(3);


print();

function print(a,b)
{

    console.log(a+b);
}
print(2,4)

var prnt = function aka() {
    console.log("awesome");

}

prnt();

(function(a,b){console.log(a+b);
}
)
(4,4);


function print()
{
    console.log("hello");
}
print.call();
print.apply();

let animal={
    name:'dog',
    eat(a,b){
        console.log(this.name + " is eating " + a + " "+ b);
    }
};
let human={
    name:'Ravi'
}
animal.eat(5,'bones');
animal.eat.call(human,10,'chips');
// error : animal.eat.apply(human,10,'chips');
animal.eat.apply(human,[10,'chips']);
//bind
let humaneat=animal.eat.bind(human);
humaneat(5,'apples');



let ob =
{
    name:'faiz',
    prnt: function() {
         console.log('a',this);
         var anprnt= ()=>
         {
            console.log('b',this);
         }
         anprnt();
    }
};
ob.prnt();
