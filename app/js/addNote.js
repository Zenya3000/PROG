var AddNote = (function () {
	var s = {
		form: '#addNote',
		field: '.add-note__ta'
	}
	return {
		init: function() {

			var chosenColor = Colors.getColor().defaultColor;

			$(window).on("setcolor", function(e, color){
				chosenColor = color;
			});
			var number = 1;
			$(s.form).submit(function(e){
				e.preventDefault();
				var text = $(s.form).find(s.field).val();
				split_text = text.split("\n");
				
				if(text){
					var note = {
						text: $(s.form).find(s.field).val(),
						color: chosenColor,
						number: number,
						split_text: split_text
					}
					$(window).trigger("addNote", note);
					number++;
				}
				
				$(s.form).find(s.field).val("");
			});
		}
	}
}());