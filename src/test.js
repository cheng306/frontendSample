require([
  'dojo/dom',
  'dojo/dom-construct'
], function (dom, domConstruct) {
  var greetingNode = dom.byId('greeting');
  domConstruct.place('<em> Dojo!!!!</em>', greetingNode);
});


let var1 = {};

Object.defineProperty(var1, "prop1",
  {
    configurable: true,
    value: 12,
  } 
);

// Object.defineProperty(var1, "prop1",
//   {
//     writable: true,
//     value: 12,
//     configurable: false,
//     enumerable: true
//   } 
// );


// var obj = {};
// var descriptor = Object.create(null); // no inherited properties
// descriptor.value = 'static';

// // not enumerable, not configurable, not writable as defaults
// Object.defineProperty(obj, 'key', descriptor);

// // being explicit
// Object.defineProperty(obj, 'key', {
//   enumerable: false,
//   configurable: false,
//   writable: false,
//   value: 'static'
// });

// // recycling same object
// function withValue(value) {
//   console.log(withValue)
//   var d = withValue.d || (
//     withValue.d = {
//       enumerable: false,
//       writable: false,
//       configurable: false,
//       value: value
//     }
//   );

//   // avoiding duplicate operation for assigning value
//   if (d.value !== value) d.value = value;

//   return d;
// }
// // ... and ...
// Object.defineProperty(obj, 'key', {
//   get
// });




