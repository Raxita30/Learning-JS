console.log("connected with external js file");

var a=1;
var b=2;

if(a+b>4)
{
    console.log(a+b);
}
else if(a+b<1)
{
    console.log(a+b);
}
else
    console.log("hi");

console.log('for loop');

for(var num=0;num<11;num=num+2)
    console.log(num)

console.log("for each");

var a= [1,2,3,4]
a.forEach(item=>console.log(item));

for(var i in a)
    console.log(i);


console.log("while loop");
var num=0;
while(num<5)
{
    console.log(num);
    num++;
}

console.log("do-while loop")
do{
    console.log(num);
    num++;
}while(num<5)

var itr=10;
console.log(itr++);
console.log(itr);

console.log(++itr);
console.log(itr);

var num1=8,n=3;

console.log(num1<<n);//32

console.log(num1>>n);//2

