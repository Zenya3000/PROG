
	// Пользовательские функции

// lesson 3;

// var take = function(fn, n){
// 	var res = [];	
// 	for (var i = 0; i < n; i++) {
// 		res.push( fn() );
// 	}
// 	return res;
// }


// var sequence  = function(start, step){
// 	var start;
// 	var step;
// 	if(start === undefined){
// 		var start = 0;
// 	} else {
// 		var start = start;
// 	}

// 	if(step === undefined){
// 		var step = 0;
// 	}else {
// 		var step = step;
	
// 	}

// 	if( start && step){
// 		start -= step;
// 	}
// 	return function(){
		
// 		return start += step;
// 	}
// };

// var generator = sequence(10, 5);
// var generator2 = sequence(16, 7);


// console.log(take(generator, 10));
// console.log(take(generator2, 20));

	
	


// var characters = [
// 	{'name': 'joey', 'age' : 46},
// 	{'name': 'monika', 'age' : 43},
// 	{'name': 'ross', 'age' : 35},
// 	{'name': 'rachel', 'age' : 48},
// 	{'name': 'chandler', 'age' : 41}
// ];


// function test(array, key){
// 	var res = [];
// 	for (var i = 0; i < characters.length; i++) {
// 		var a = array[i][key];
// 		res.push(a);	

// 	};
// 	return res;
// };
// console.log(test(characters, 'name'));

// lesson 4;

// var arr = [3,4,5,6,7,8];
// var f1 = function(x){
// 	return x * 2;
// }

// var map = function(fn, arr){
// 	res = [];
// 	for (var i = 0; i < arr.length; i++) {
// 		res.push( fn(arr[i]));
// 	}

// 	return res;






// homework


// конструктор
// function Animal() {
//   this.name = "";
//   this.speed = 0;
// }

// // методы в прототипе
// Animal.prototype.run = function(speed) {
//   this.speed += speed;
//   alert('скорость ' + this.speed );
// };

// Animal.prototype.stop = function() {
//   this.speed = 0;
//   alert( this.name + ' стоит' );
// };

// var animal = new Animal();

// console.log(animal(animal.run(5), animal.stop()));

// var findInArr = function(arr, val){
// 	for (var i = 0; i <= arr.length; i++) {
// 		if( arr[i] === val) {
// 			return i;
// 		}
// 	return -1;
// 	}
// }

// function Hamburger(size, stuffing) {
// 	this._size = size;
// 	this._stuffing = stuffing;
// 	this._toppings = [];
// }



// 	Hamburger.SIZE_SMALL = {
// 		name: 'Small',
// 		price: 50,
// 		cal: 35
// 	};
// 	Hamburger.SIZE_LARGE = {
// 		name: 'Large',
// 		price: 60,
// 		cal: 45
// 	};
// 	Hamburger.STUFFING_CHEESE = {
// 		name: 'Cheese',
// 		price: 10,
// 		cal: 14
// 	}
// 	Hamburger.STUFFING_SALAD = {
// 		name: 'Salad',
// 		price: 8,
// 		cal: 5
// 	}
// 	Hamburger.STUFFING_POTATO = {
// 		name: 'Potato',
// 		price: 8,
// 		cal: 10
// 	}
// 	Hamburger.TOPPING_MAYO = {
// 		name: 'Mayo',
// 		price: 5,
// 		cal: 171
// 	}
// 	Hamburger.TOPPING_SPICE = {
// 		name: 'Spice',
// 		price: 5,
// 		cal: 2
// 	}

//     Hamburger.prototype.addTopping = function (topping) {
//         var founded = findInArr(this._toppings, topping);
//         if(founded !== -1){
//             alert('Такой топпинг уже есть');
//         }else{
//             this._toppings.push(topping);
//         }
//     };

// 	Hamburger.prototype.removeToping = function(topping){
// 		var founded = findInArr(this._toppings, topping);
// 		if(founded !== -1){
// 			alert('Такой добавки нет');
// 		} else {
// 			this._toppings.splice(founded, 1);
// 		}
// 	};

//     Hamburger.prototype.getPrice = function () {
//         var price = this._size.price + this._stuffing.price;
//         for (var i = 0; i < this._toppings.length; i++) {
//             price += this._toppings[i].price;
//         }
//         return price;
//     };
//     Hamburger.prototype.getCalories = function () {
//         var price = this._size.cal + this._stuffing.cal;
//         for (var i = 0; i < this._toppings.length; i++) {
//             price += this._toppings[i].cal;
//         }
//         return price;
//     };



// var hamburger1 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// hamburger1.addTopping( Hamburger.TOPPING_MAYO );
// console.log(hamburger1.getPrice());
// console.log(hamburger1.getCalories());



// var Calc = function(x, y){
// 	this.numFirst = x,
// 	this.numSecond = y
// };

// Calc.prototype.sum = function() {
// 	return this.numFirst + this.numSecond;
// };

// var test = new Calc(10, 20);
// console.log(test.sum());

// hamburger1.addTopping( Hamburger.TOPPING_MAYO );





//HW 5
var main = document.getElementsByClassName('main');
var main_content = document.getElementsByClassName('content');
// main[0].getElementsByClassName("arrow")[0].className += " active";

if(main.length == main_content.length){
	for (var i = 0; i < main.length; i++) {
		main[i].setAttribute('name', i);
		main[i].setAttribute('status', '');
		// main_content[i].setAttribute('name', i);

	}
}

function checkActive() {

	var main = document.querySelectorAll('.main');
	for (var i = 0; i < main.length; i++) {
		var item = main[i];
		if( $(item).hasClass('active')){
			$(item).find('content').slideDown(300);
			item.setAttribute('status', 'open');
		} else {
			item.setAttribute('status', 'closed');
		}

		
	}
	

	
}

checkActive();


//create arrow next to main class;

var arrow = document.querySelectorAll('.main');

for (var i = 0; i < arrow.length; i++) {
	var num = arrow[i].attributes.name.nodeValue;
	// console.log(arrow[num]);
	if($(arrow[num]).children().hasClass('content')){
		$(arrow[num]).append('<span class="arrow "><i class="fas fa-chevron-right"></i></span>');
	};
}


//show content

var main = document.querySelectorAll('.main');
for (var i = 0; i < main.length; i++) {
	main[i].onclick = function(){
	var check = true;

		var bla = this.attributes.name.nodeValue;
		// alert(bla);
		//close main class with content clildren
		if(this.attributes.status.nodeValue == 'open' && $(this).children().hasClass('content')){
			$(this).children('.content').slideUp(300);
			console.log($(this).children());
			this.attributes.status.nodeValue = 'closed';
			setTimeout(function(){
				$(main[bla]).removeClass('active');

			}, 300);
			return false;
		} else {
			console.log('close main class with content clildren, FALSE');
		}
		if(this.attributes.status.nodeValue == 'closed' && $(this).children().hasClass('content')){
			$(this).children('.content').slideDown(300);
			this.attributes.status.nodeValue = 'open';
			setTimeout(function(){
				$(main[bla]).addClass('active');

			}, 300);
			return false;
		} else {
			console.log('fail ((( open');
		}




	}
};




//version 2

// $(document).on('click', '.main li > a', function(event){
// 	var $this = $(this);
// 	var $next = $this.next();
// 	if($next.length){
// 		$next.slideToggle().parent().siblings().children('ul').filter(':visible').slideToggle();
// 		event.preventDefault();
// 	}


// });

// ---- end version 2








		// if( check == true && $(this).hasClass('active')){
		// 	$(this).removeClass('active');
		// 	$(this).children('content').slideUp(300);
	
		// 	check = false;
		// 	console.log('close', check);
		// 	console.log(bla);
		// 	return false;
		// } else
		// if( check == true && !$(this).hasClass('active') ){
		// 	$(this).children().find('content').slideDown(300);	
		// 	$(this).addClass('active');
		
		// 	check = true;
		// 	console.log('open', check);
		// 	console.log(bla);
		// 	return false;
		// } else
		
		// // if(check = false && $(this).parent('content') ){
		// {
			
		// 	$(this).children().find('content').slideUp(300);
		// 	$(this).removeClass('active');
		// 	check = true;
		// 	console.log('last', check);
		// 	console.log(bla);
		// 	return false;	
		// };

// 	}
// };























// var show = document.getElementsByClassName('main');

// for (var i = 0; i < show.length; i++) {

// 	show[i].onclick = function(){
// 	var children = this.childNodes;


// 		if($(children).hasClass('content') && !$(children).parent().hasClass('active')) {
// 			$(children).slideDown(300);
// 			$(children).parent().addClass('active');
			
// 			console.log('add');
// 		} else if($(children).hasClass('content') && $(children).parent().hasClass('active') ){

// 			console.log('remove');
// 			$(children).slideUp(300);
// 			$(children).parent().removeClass('active');
// 		} else {
// 			console.log('proval');
// 		}


// 	}
// }













	// tops[i].onclick = function(){


		// var x = this.attributes.name.nodeValue;
		// if( tops[x].classList.contains('active')){
		// 	console.log(tops[x]);
		// 	tops[x].find('.content').slideDown(300);

			// console.log(main);
				// var tops[x].before('<span class="arrow "><i class="fas fa-chevron-right"></i></span>');
				


			// if(tops[x].getElementsByClassName('content')){
			// 	tops[x].slideDown(300);
			// } else {
			// 	tops[x].slideUp(300);
			// }

		// console.log(tops[x].className);








		
		// if( !$(this).hasClass('active') ){
		// 	console.log('open');
		// 	$(this).addClass('active');
		// 	$(this).firstChild.nodeName()
		// 	$(this).find('.content').slideDown(300);
		// } else if($(this).hasClass('active')){
		// 	console.log('go child');
		// 	console.log($(this).find('.content'));
		// 	if($(this).find('.main').find('.content')) {
		// 		$(this).removeClass('active');
		// 		$(this).slideDown(300);
		// 		console.log('finish_child');
		// 	} else {
		// 		$(this).removeClass('active');
		// 		$(this).find('.content').slideUp(300);		
		// 		console.log('close_child');		
		// 	}
		// }
		// else {
		// 	console.log('close');
		// 	$(this).removeClass('active');
		// 	$(this).find('.content').slideUp(300);
		// }	


	// } for


//get users ( left table )
var root = 'https://jsonplaceholder.typicode.com';
$.ajax({
	url: root +'/users',
	method: 'GET',
	success: function(data){
		for (var i = 0; i < data.length; i++) {
			var item = '<tr><td class="name" data-number="'+data[i].id+'">'+ data[i].name +'</td><td>'+ data[i].email +'</td><td><button data-number="'+ data[i].id +'" class="show_message btn btn-primary">show messages</button></td><td><button data-number="'+ data[i].id +'" class="send_message btn btn-success">send messages</button></td></tr>';	
			$('#left_side').append(item);
			// var name = data[i].name;
			// var email = data[i].email;
			// var id = data[i].id;
			// $('#left_side').append(`
			// 		<tr>
			// 			<td>${name}</td>
			// 			<td>${email}</td>
			// 			<td><button data-number="${id}">all messages</button></td>
			// 		</tr>
			// `);
		}
	}
})
// event on click ( right table)
$(document).on('click', '.show_message', function(){
	$('.selected').removeClass('selected');
	var id = $(this).attr('data-number');
	var name = $('.name[data-number="'+id+'"]').text();
	$(this).parent().parent().addClass('selected');
	function isVisible(times){
		$('.item').each(function(i){
			setTimeout(function(){
				$('.item').eq(i).fadeIn(300).addClass('isVisible');
			}, 300 * i);
		});
		setTimeout(function(times){
			$('.show_message').attr('disabled', false);	
			$('.show_message').removeClass('disabled');	
		}, 300 * times);
	}

	$.ajax({
		url: root+'/posts?userId='+id,
		method: 'get',
		beforeSend: function(){
			$('.show_message[data-number='+ id +']').addClass('disabled');
			$('.show_message').attr('disabled', true);
		},
		success: function(data){
				var item = item + '<tr><td>User: <strong>'+ name +'</strong></td></tr>';
				for (var i = 0; i < data.length; i++) {
						var item = item + '<tr class="item"><td><span>'+data[i].body+'</span></td></tr>';
				}
				$('#messages').html('');
				$('#messages').append(item);
				isVisible(data.length);
		}
	});
});

$(document).on('click', '.send_message', function(){
	var id = $(this).attr('data-number');
	var m_send = $('#send_messege').val();
	
	$.ajax({
		url: root+'/posts',
		method: 'POST',
		body: {
			body: m_send,
			userId: id,
			title: 'bla bla'
		},
    	success: function(data){
				
				var item_post = '<tr class="item"><td><span>'+m_send+'</span></td></tr>';
				
    			$('#messages').append(item_post);

    		// 	$('.item').each(function(i){
    		// 		if($('.item').hasClass('isVisible')){
						// console.log('ok');
    		// 		} else {
    		// 			$('.item').addClass('isVisible');
    		// 		}
    		// 	}
    			$('.item').fadeIn(300).addClass('isVisible');
    			console.log('success');

    	}
	}).then(function(data){
		console.log(data);
	});


});