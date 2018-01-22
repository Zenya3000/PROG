var Notes = (function () {
	var n = {
		container: "#notes",
		zametka: "zametka",
		chosenColor: "",
		editArea: "#editArea",
		number: "data-number",
		classZametka: ".zametka"
	}
	function z_split(text){
		var res = "";

		for (var i = 0; i < text.length; i++) {
			res += text[i]+'<br>';
		}
		return res;
	}
	return {
		render: function(){
			var chosenColor = Colors.getColor().defaultColor;
			
			$(window).on("addNote", function(event, note){
				$(n.container).append('<div class="'+ n.zametka +' '+ note.color +'" data-color="'+note.color+'" data-number="'+note.number+'"><button class="close" data-number="'+note.number+'"><i class="fa fa-times" aria-hidden="true"></i></button>' + '<p class="text_zametka">' + z_split(note.split_text)+ '</p>' + ' <i class="fa fa-pencil editNote" data-number="'+note.number+'" aria-hidden="true"></i> <i class="fa fa-arrows-alt moveZametka" data-number="'+note.number+'" aria-hidden="true"></i> </div>');
				

			});
			
		},
		remove: function(){
			$(window).on("toRemove", function(event, toRemove){
				$(n.container).find('.zametka[data-number="'+toRemove.number+'"]').remove();
			})
		},
		edit: function(){
			$(window).on("editNote", function(event, editItem){
				
				$(n.editArea).val("");
				$(n.editArea).removeClass();
				var text = editItem.text;
				var n_text = text.split("<br>");
				var textEdit = "";

				for (var i = 0; i < n_text.length -1; i++) {
					textEdit += n_text[i] + '\n';
				}

				$(n.editArea).val(textEdit);
				$(n.editArea).addClass(editItem.color);
				$(n.editArea).attr("data-number", editItem.number);
			})
		},
		save: function(){
			$(window).on("saveEdit", function(event, saveData){
				var newItem = $(n.classZametka+'['+ n.number +'="'+saveData.id+'"]');
				$(newItem).find('.text_zametka').html("");
				for (var i = 0; i < saveData.text.length; i++) {
					$(newItem).find('.text_zametka').append(saveData.text[i] + '<br>');
				}
				$('#myModal').modal('toggle');

			})
		},
		move: function(){
			
		},
		init: function(){
			this.render();
			this.remove();
			this.edit();
			this.save();
			this.move();

		}
	}

}())