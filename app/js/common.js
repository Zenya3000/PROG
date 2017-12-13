

//  var memory;
//  var price;
//  var img


// var test_size = [

// {
// 	"size" : 32,
// 	"price" : 600
// },
// {
// 	"size" : 64,
// 	"price" : 700
// },
// {
// 	"size" : 128,
// 	"price" : 900
// },
// {
// 	"size" : 256,
// 	"price" : 1200
// }
// ];

// var test_color = [
// {
// 	"color" : 'black',
// 	"k" : 1.1,
// 	"img" : '<img style="width: 200px;" src="img/black.png">'
// },
// {
// 	"color" : 'silver',
// 	"k" : 1,
// 	"img" : '<img style="width: 200px;" src="img/silver.png">'
// },
// {
// 	"color" : 'red',
// 	"k" : 1.07,
// 	"img" : '<img style="width: 200px;" src="img/red.png">'
// }
// ];

// x = true;
// y = true;
// while(x){
// 	a = prompt("Сколько памяти?");
// 	if(a == null){
// 		alert("Ну ок (((");
// 		x = false;
// 		y = false;
// 		break;
// 	};

// 	for (var i = 0; i < test_size.length; i++) {

// 		if (+a == test_size[i].size) {
// 			memory = +test_size[i].size;
// 			price = +test_size[i].price;
// 			x = false;
// 			break;
// 		}
// 	}
	
// };



// while(y){
// 	a = prompt("Какой цвет?");
// 	if ( a == null) {
// 		alert("Ты был близок...");
// 		y = false;
// 		break;
// 	}
// 	for (var i = 0; i < test_color.length; i++) {
// 		if (a == test_color[i].color) {
// 			price = price * +test_color[i].k;
// 			img = test_color[i].img;
// 			y = false;
// 			break;
// 		}
// 	}
// }

// if( memory == null && price == null && img == null) {
// 	memory = 0;
// 	price = 0;
// 	img = 'no image';
// }


var test = ['toyota', 2, 'mazda', 4, 'lexus', 6];
console.log(test);

var test_new = test.splice(1,2);

console.log(test_new);
console.log(test);
test.push("bla", 123131);
console.log(test);
// document.write('<h2>Цена: '+ price + '$</h2><h4>Память: '+ memory + '</h4>' + img);


