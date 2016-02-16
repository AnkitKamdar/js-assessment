exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {

  },

  manipulateRemoteData : function(url) {
	var defer = $.Deferred();

	$.ajax(url).then(function(data){
		var res = $.map(data.people, function(person){
			return person.name;
		});
		defer.resolve(res.sort());
	});

	return defer.promise();
  }
};
