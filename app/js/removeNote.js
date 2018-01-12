var RemoveNote = (function(){
	var r = {
		item: "zametka",
		data: "data-number",
		b_close: ".close"
	}
	return {
		click: function(){
			$(document).on('click', '.close', function(){
				
				var number = $(this).attr('data-number');
				if(number){
					var toRemove = {
						number: number,

					}
					$(window).trigger("toRemove", toRemove);
				}
			})
		},
		init: function(){
			this.click();

		}
	}
}());