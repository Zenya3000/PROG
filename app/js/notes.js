var Notes = (function () {
	var n = {
		container: "#notes",
		zametka: "zametka",
		chosenColor: ""
	}
	function z_split(text){
		res = "";
		for (var i = 0; i < text.length; i++) {
			res += text[i] + '<br>';
		}
		return res;
	}
	return {
		render: function(){
			var chosenColor = Colors.getColor().defaultColor;
			
			$(window).on("addNote", function(event, note){
				$(n.container).append('<div class="'+ n.zametka +' '+ note.color +'" data-number="'+note.number+'"><button class="close" data-number="'+note.number+'">x</button>'+ z_split(note.split_text) + ' <i class="fa fa-pencil" aria-hidden="true"></i> </div>');
			});
		},
		remove: function(){
			$(window).on("toRemove", function(event, toRemove){
				$(n.container).find('.zametka[data-number="'+toRemove.number+'"]').remove();
			})
		},
		init: function(){
			this.render();
			this.remove();

		}
	}

}())