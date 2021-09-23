
export let obj1 = {
  prop1: 12
}

obj1.prop1=13;

console.log("exportModule2:");
console.log(import.meta);
console.log(this);

