exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
  	var a=0, b=1, c=1;	
  	for(var i=2; i<n; i++){
  		c = a+b;
  		a = b;
  		b = c;
  	}
  	return c;
  },

  validParentheses: function(n) {

  }
};
