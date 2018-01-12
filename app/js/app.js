var App = (function () {
	return {
		init: function(){
			Colors.init();	
			AddNote.init();
			RemoveNote.init();
			EditNote.init();
			SaveNote.init();
			Move.init();
			Notes.init();
		}
	}
}())

App.init()