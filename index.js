var YouTube = require('youtube-node');

var youTube = new YouTube();

youTube.setKey("AIzaSyDIWvFl3R_D5TgcFpUC8s5Tj937el6RlBQ");

youTube.search("World War z Trailer", 2, function(error, result){
	if (error) {
		console.log(error);
	}
	else {
		console.log(JSON.stringify(result, null, 2));
	}
});