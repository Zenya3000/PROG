var notes = function () {

	var news = document.getElementById("notes");
	$("#add-note__btn").on("notes", function(event, val){
		var div = document.createElement('div');
		div.className+= 'zametka';
		div.innerHTML = val;
		news.appendChild(div);
		// news.append("<div class="+'news'+">"+ val + "</div>");
	});
}