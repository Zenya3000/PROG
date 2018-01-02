var addNote = function () {

	var button = document.getElementById('add-note__btn');
	var form = document.getElementById('addNote');

	button.onclick = function (e) {
		e.preventDefault();
		var val = $(form).find("textarea").val();
		$(form).find("textarea").val("");
		$(this).trigger("notes", val);
		console.log(val);

	}

}