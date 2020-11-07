function once(fn) {
  var returnValue, called = false;
  return function () {
      if (!called) {
          called = true;
          returnValue = fn.apply(this, arguments);

      }
      return returnValue;
  };
}

var func = function(){
  console.log("hahaha");
}

once(func);

console.log("here");