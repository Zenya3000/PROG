var EditNote = ( function() {
	var e =  {
		item: ".zametka",
		data: "data-number",
		color: "data-color",
		edit: ".editNote",
		area: "#editArea"

	}

	function z_split(text){
		res = "";
		console.log('z_split', text);
		for (var i = 0; i < text.length; i++) {
			res += text[i]+'<br>';
		}
		return res;
	}

	return {
		click: function(){
			$(document).on('click', '.editNote', function(){
				var id = $(this).attr(e.data);
				if(id){
					var color = $(e.item+'['+e.data +'=' + '"'+ id +'"'+']').attr(e.color);
					var text = $(this).parent('.zametka').find('p').html();
					$('#myModal').modal('show');
					var editItem = {
						text: text,
						item: e.item,
						number: id,
						color: color,
						area: e.area
					}
					$(window).trigger("editNote", editItem);
					
				}
				
				
			})
		},
		init: function(){
			this.click();
		}
	}
}());