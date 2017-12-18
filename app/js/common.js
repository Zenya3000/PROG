
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

var findInArr = function(arr, val){
	for (var i = 0; i <= arr.length; i++) {
		if( arr[i] === val) {
			return i;
		}
	return -1;
	}
}

function Hamburger(size, stuffing) {
	this._size = size;
	this._stuffing = stuffing;
	this._toppings = [];
}



	Hamburger.SIZE_SMALL = {
		name: 'Small',
		price: 50,
		cal: 35
	};
	Hamburger.SIZE_LARGE = {
		name: 'Large',
		price: 60,
		cal: 45
	};
	Hamburger.STUFFING_CHEESE = {
		name: 'Cheese',
		price: 10,
		cal: 14
	}
	Hamburger.STUFFING_SALAD = {
		name: 'Salad',
		price: 8,
		cal: 5
	}
	Hamburger.STUFFING_POTATO = {
		name: 'Potato',
		price: 8,
		cal: 10
	}
	Hamburger.TOPPING_MAYO = {
		name: 'Mayo',
		price: 5,
		cal: 171
	}
	Hamburger.TOPPING_SPICE = {
		name: 'Spice',
		price: 5,
		cal: 2
	}

    Hamburger.prototype.addTopping = function (topping) {
        var founded = findInArr(this._toppings, topping);
        if(founded !== -1){
            alert('Такой топпинг уже есть');
        }else{
            this._toppings.push(topping);
        }
    };

	Hamburger.prototype.removeToping = function(topping){
		var founded = findInArr(this._toppings, topping);
		if(founded !== -1){
			alert('Такой добавки нет');
		} else {
			this._toppings.splice(founded, 1);
		}
	};

    Hamburger.prototype.getPrice = function () {
        var price = this._size.price + this._stuffing.price;
        for (var i = 0; i < this._toppings.length; i++) {
            price += this._toppings[i].price;
        }
        return price;
    };
    Hamburger.prototype.getCalories = function () {
        var price = this._size.cal + this._stuffing.cal;
        for (var i = 0; i < this._toppings.length; i++) {
            price += this._toppings[i].cal;
        }
        return price;
    };



var hamburger1 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// console.log(hamburger1.getPrice());
hamburger1.addTopping( Hamburger.TOPPING_MAYO );
console.log(hamburger1.getPrice());
console.log(hamburger1.getCalories());



var Calc = function(x, y){
	this.numFirst = x,
	this.numSecond = y
};

Calc.prototype.sum = function() {
	return this.numFirst + this.numSecond;
};

var test = new Calc(10, 20);
console.log(test.sum());

// hamburger1.addTopping( Hamburger.TOPPING_MAYO );
