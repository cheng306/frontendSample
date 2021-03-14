//mistypeVariable = 17;
var obj1 = {z:12};
Object.defineProperty(obj1, 'x', { value: 42, writable: true });
//delete obj1.x;


obj1.y =12;

console.log(obj1)
//delete obj1.y;


console.log(obj1)

for (let a in obj1){
  console.log(a)
}


