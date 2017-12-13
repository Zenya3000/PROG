
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

var arr = [3,4,5,6,7,8];
var f1 = function(x){
	return x * 2;
}

var map = function(fn, arr){
	res = [];
	for (var i = 0; i < arr.length; i++) {
		res.push( fn(arr[i]));
	}

	return res;
};


console.log( map(f1, arr));


