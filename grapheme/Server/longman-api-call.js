if (Meteor.isServer) {
	Meteor.methods({
		checkDb: function (word) {
			if (UserDictionary.findOne({word: word}) === undefined) { 
				console.log(word + ": query returned undefined");
				longmanAPICall(word) 
		  } else {
				console.log(word + ": query returned an object");
				console.log(UserDictionary.findOne({word: word}));
				// word was already in db - call the helper function from here
			}
		}		
	})
}

function longmanAPICall(word) {
	console.log("in longmanAPICall, word = " + word);
  var url = "https://api.pearson.com/longman/dictionary/entry.json?q=" + word + "&apikey=2884334e050d5be2e5f001d00b4f1d28";
  console.log("url = " + url);
  results = Meteor.http.call("GET", url);
	longmanEntry = results.content;
  console.log("longmanEntry = " + longmanEntry); 
	json = {word: word, entry: longmanEntry};
  UserDictionary.insert(json)
	// call the helper function from here
}