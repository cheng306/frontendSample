function once(fn) {
  var returnValue, called = false;
  return function () {
      if (!called) {
          console.log("nested");
          called = true;
          returnValue = fn.apply(this, arguments);
      }
      return returnValue;
  };
}
const add = (a, b) => a + b;
QUnit.module('add', function() {
  QUnit.test('should add two numbers', function(assert) {
    var callback = sinon.fake();
    var proxy = once(callback);

    proxy();

    assert.ok(callback.called);
     
  });
});