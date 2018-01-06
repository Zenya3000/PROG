var Colors = (function () {

	var s = {
		container: '#colors',
		item: '.colors__item',
		itemClassName: 'colors__item',
		itemActiveMod: 'colors__item--isActive'
	};
	var colors = ['gold', 'red', 'green', 'blue'];
	var defaultColor = colors[2];


	return {
		getColor: function(){
			return {
				color: colors,
				defaultColor: defaultColor
			};
		},
		render: function(){	
			
			for (var i = 0; i < colors.length; i++) {
				$(s.container).append('<span data-color="'+colors[i]+'" class="'+colors[i] + ' '+ s.itemClassName+'"></span>')
			}
			$(s.item+'[data-color="'+ defaultColor +'"]').addClass(s.itemActiveMod);		
		},
		event: function(){
			$(s.item).click(function(e){
				var color = $(this).attr('data-color');
				$(s.item).removeClass(s.itemActiveMod);
				$(this).addClass(s.itemActiveMod);
				$(window).trigger("setcolor", color);
			})
		},
		init: function() {
			this.render();
			this.event();
		}
	}
}())