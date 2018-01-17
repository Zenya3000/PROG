var SaveNote = ( function() {
	var sn = {
		idForm: '#SaveNoteForm',
		buttonSave:  '#saveEditModalForm',
		textArea: '#editArea',
		id: 'data-number'
	}

	return {

		save: function(){
			$(sn.idForm).submit(function(e){
				e.preventDefault();
				var value = $('#myModal').find('.modal-body').find(sn.textArea).val();
				split_text = value.split("\n");
				var id = $(sn.textArea).attr(sn.id);
				var saveData = {
					text: split_text,
					id: id
				}
				$(window).trigger("saveEdit", saveData);
				// $('#myModal').find('.modal-body').find(sn.textArea).val("");
			});
		},

		init: function(){
			this.save();
		}
	}
}())