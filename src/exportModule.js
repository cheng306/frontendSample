console.log("exportModule:");
console.log(import.meta);
console.log(this);

export function exportFunction(input){
  return `exprtFunction accept ${input}`;
}

export function exportFunction2(input){
  return `exprtFunction accept ${input}`;
}

export function exportFunction3(input){
  return `exprtFunction accept ${input}`;
}


export let prom1 = new Promise(function(res, rej){
    setTimeout(function(){rej(12)}, 2000);
});


prom1.catch(function(e){
    console.log(e);
});
// document.addEventListener("DOMContentLoaded", function(event){
//   console.log("DOMContentLoaded");
//   console.log(event);
  
// });