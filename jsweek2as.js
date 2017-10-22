/* 
function to add three values 
*/
function add (firstnum,secondnum,thirdnum)
{
	let sum = firstnum + secondnum + thirdnum;
	return sum;
}
let x = add(3,2,6);
console.log(x);

function colorCar (color1)
{
	console.log(`a ${color1} car`);
}

colorCar('red');

var car = {long:'100',width:'200',wight:'500kg'};

// answer number 3
function cartype (as)
{
let ii = Object.keys(as).length
console.log(ii);
for (i=0;i<ii;i++)
{
console.log(Object.getOwnPropertyNames(as)[i]+"="+ as[Object.keys(as)[i]]);
}
}
cartype(car);

// answer number 4
function vehicleType(color2,code)
{
	if (code == 1)
	{
		console.log(`a ${color2} car`);
	}
	else if (code == 2)
	{
		console.log(`a ${color2} motorbike`);
	}
}
vehicleType("blue",2);
vehicleType("red",1);


// answer number 5
3 == 3 ?     console.log("true") : console.log("false");
// answer number 6
function vehicleusd(color3,code3,age)
{
	if (code3 == 1 && age > 0 )
	{
		console.log(`a ${color3} used car`);
	}
	else if (code3 == 1 && age <= 0 )
	{
		console.log(`a ${color3}  new car`);
	}
	else if (code3 == 2 && age > 0 )
	{
		console.log(`a ${color3} used motorbike`);
	}
		else if (code3 == 2 && age <= 0 )
	{
		console.log(`a ${color3} new motorbike`);
	}
}
vehicleusd("blue",1,5);
vehicleusd("blue",1,0);
vehicleusd("red",2,5);
vehicleusd("red",2,0);

// answer number 7
var listvehicles=["car","motorbike", "caravan", "bike"];
// answer number 8
console.log(listvehicles[2]);
// answer number 9
function vehicle2(color,age,order)
{
	if (age>0)
	{
	console.log("a "+ color+" new "+listvehicles[order]);
	}
	else
	{
	console.log("a "+ color+" used "+listvehicles[order]);
	
	}
}
vehicle2("green", 3, 1);
// answer number 10
// answer number 11
console.log(`Amazing Joe's Garage, we service`);
for (i=0 ; i<listvehicles.length-1;i++)
	{console.log(listvehicles[i]);}
console.log(`and ${listvehicles[listvehicles.length-1]}`);
// answer number 12
var empty = {};
// answer number 13
var obj1 = {
        a: 1,
        b: 'this is the letter b',
        c: { foo: 'what is a foo anyway',
             bar: [1,2,3,4],
        }
    }
    
    var obj2 = {
        a: '1',
        b: 'this is the letter b',
        c: { foo: 'what is a foo anyway',
             bar: [1,2,3,4],
        }
    }
let obj3=obj1
    console.log(Object.is(obj1,obj3));
    function comp(ob1,ob2)
    {
let result;
if (ob1 === ob2)
{
	console.log("true");
}
else
{
	console.log("false");
}

    }
    comp(obj1,obj3);
// answer number 14
function foo() {
	bar();
    }
    
    function bar() {
        console.log('Hello, I am bar!');
        return 1;
    }
    
    foo();
    let xx = [1,2,3];
    var y = [1,2,3];
    var z = y;
//x == y, x === y and z == y and z == x? Prove it!
console.log(xx == y);
console.log(xx === y);
console.log(z == y);
console.log(z === y);
