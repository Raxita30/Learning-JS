console.log("connected to external js file");

//encapsulation
class Box
{
    constructor(length)
    {
        this.length=length;
        console.log("constructor called");
    }
    display(){
        console.log(this);
    }
}
let obj = new Box(20);
obj.display();



var father={
    name:'Father',
    sing(){
        console.log("singing");
    },
    eat: function() {
        console.log("eating");
    },

    drink: ()=> {
        console.log("drinking");
    }
};

var child= {
    name:"Son",
    eat()
    {
        console.log("eating");
    }
};

child.__proto__=parent;

console.log("_---------------------------------")

class Fruits
{
    constructor(color)
    {
        this.color=color;
        console.log("parent cons");

    }
    print()
    {
        console.log(this);
    }
}
class Apple extends Fruits{
    constructor(color,type)
    {   super();
        this.type=type;
        console.log("child cons");
    }
    print()
    {
        super.print();
    }
}
let obj2 = new Apple("red","apple");
obj2.print();
let obj3= new Fruits("red");
obj3.print();

console.log("-------------------------------------------")


class Fruits1
{
    constructor(color)
    {
        this.color=color;
        console.log("parent cons");

    }
    print()
    {
        console.log(this);
    }
    print(size)
    {
        console.log(size);
    }
}

let obj4= new Fruits1("red");
obj4.print(10);
obj4.print()//undefined


console.log("------------------------------------------------")

class parent11
{
    live()
    {
        console.log("Iran");
    }
}
class child1 extends parent11
{
    live()
    {
        console.log("India");
    }
}
var obj5 = new child1();
obj5.live();


console.log("-----------/exceptional handling----------");
function a(age)
{
    if(age<16)
    {
        try{
            throw new Error("You are under age");
        }
        catch(error)
        {
            console.log(error);
        }
        finally{
            console.log("Pgm Ended");
        }
    }
    else{
        console.log("You can vote")
    }
}
a(13)






