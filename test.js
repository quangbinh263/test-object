const array = [1,2,10,16];

const mapArray = array.map(num => num*2);

const filterArray = array.filter(num => num > 5);

const reduceArray = array.reduce((acc, num)=> {
	return acc + num
}, 0);

console.log(mapArray);
console.log(filterArray);
console.log(reduceArray);

var c = [1,2,3,4];
var d = [].concat(c);

d.push(12);

console.log(c);
console.log(d);

let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);
let clone2 = {...obj}

obj.c = 5;

console.log(obj);
console.log(clone);
console.log(clone2);
