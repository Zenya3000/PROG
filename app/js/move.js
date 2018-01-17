var Move = ( function() {
	var m = {
		zametka: ".zametka",
		test2: "test2",
		move_z: ".moveZametka",
		mainPlace: '#notes'
	}

	return {
		move: function(){

					$(document).on('mousedown', m.move_z, function(e){


						var id = $(this).attr('data-number');
						var obj = $(m.zametka+'[data-number="'+id+'"]');

						var parent = this.parentNode;
						var coords = getCoords(parent);
						var shiftX = e.pageX - coords.left;
						var shiftY = e.pageY - coords.top;
						parent.style.position = 'absolute';
						parent.style.height = 'auto';

						$(m.mainPlace).append(parent);
						removeSelect();
						moveAt(e);

						parent.style.zIndex = 1000;

						function moveAt(e) {
							parent.style.left = e.pageX - shiftX + 'px';
							parent.style.top = e.pageY - shiftY + 'px';
						};
						document.onmousemove = function(e) {
							moveAt(e);
						};
						document.onmouseup = function() {
							document.onmousemove = null;
							m.move_z.onmouseup = null;
						};

					})

					m.move_z.ondragstart = function() {
						return false;
					};
					function removeSelect() { //функция - убрать стандартное выделение
					    var b =document.body; //по всему документу
					    b.style.webkitUserSelect = b.style.mozUserSelect = b.style.msUserSelect = 'none'; //добавляем свойство CSS - запретить выделение
					}
					function getCoords(elem) {   
						position = $(elem).position();
						return {
							top:  position.top,
							left:  position.left,

							
						};
					}
					// } 







			// var ball = document.getElementById('ball');

			// ball.onmousedown = function(e) {

			//   var coords = getCoords(ball);
			//   var shiftX = e.pageX - coords.left;
			//   var shiftY = e.pageY - coords.top;

			//   ball.style.position = 'absolute';
			//   document.body.appendChild(ball);
			//   moveAt(e);

			//   ball.style.zIndex = 1000; // над другими элементами

			//   function moveAt(e) {
			//     ball.style.left = e.pageX - shiftX + 'px';
			//     ball.style.top = e.pageY - shiftY + 'px';
			//   }

			//   document.onmousemove = function(e) {
			//     moveAt(e);
			//   };

			//   ball.onmouseup = function() {
			//     document.onmousemove = null;
			//     ball.onmouseup = null;
			//   };

			// }

			// ball.ondragstart = function() {
			//   return false;
			// };

			// function getCoords(elem) {   // кроме IE8-
			//   var box = elem.getBoundingClientRect();
			//   return {
			//     top: box.top + pageYOffset,
			//     left: box.left + pageXOffset
			//   };
			// }

			// }

			
		},
		init: function(){
			this.move();
		}
	}
}())