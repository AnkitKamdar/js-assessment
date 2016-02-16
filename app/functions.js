exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(str1){
        return str + ', ' + str1;
    };
  },

  makeClosures : function(arr, fn) {
    var result = [];
    var testFunction = function(value) {
      return function(){
        return fn(value);
      };
    };

    for(var i=0, len=arr.length; i<len; i++){
      result.push(testFunction(arr[i]));
    }

    return result;
  },

  partial : function(fn, str1, str2) {

  },

  useArguments : function() {
    var add = 0;
    for(var i=0, len = arguments.length; i<len; i++){
      add  +=arguments[i];
    }

    return add;

  },

  callIt : function(fn) {
    var args = Array.prototype.splice.call(arguments, 1, arguments.length);
    fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
