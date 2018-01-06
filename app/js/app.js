var App = (function () {
	return {
		init: function(){
			Colors.init();	
			AddNote.init();
			RemoveNote.init();
			Notes.init();	
		}
	}
}())

App.init()