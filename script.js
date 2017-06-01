// var a = 2 + 2;
// var month;

// function getNameOfAMonth(index) {
// 	switch (a) {
// 		case 0:
// 			return 'January';
// 		case 1:
// 			return 'February';
// 		case 2:
// 			return 'March';
// 		case 3:
// 			return 'April';
// 		case 4:
// 			return 'May';
// 		case 5:
// 			return 'June';
// 		case 6:
// 			return 'July';
// 		case 7:
// 			return 'August';
// 		case 8:
// 			return 'September';
// 		case 9:
// 			return 'October';
// 		case 10:
// 			return 'Nowember';
// 		case 11:
// 			return 'December';
// 	}
// }

// console.log(getNameOfAMonth(0));







// // for (var i = 0; i < 20; i++) {

// // }



// var obj = {
// 	name: 'Semen',
// 	age: 69,
// 	id: 1
// }

// for (var key in obj) {
// 	console.log('' + key + ': ' + obj[key]);
// }





// var obj = {
// 	"69": "value: 69",
// 	"99": "value: 88",
// 	"18": "value: 18"
// }

// for (var key in obj) {
// 	console.log(obj[key]);
// }

// var counter = 0;

// for (var key in obj) {
// 	if (obj.hasOwnProperty(key)) {
// 	counter++
// 	}
// }

// console.log(counter);








// var weights = {
// 	anton: 80,
// 	ivan: 85,
// 	dima: 70,
// 	inna: 40,
// 	valera: 68
// }

// var commonWeight = 0;
// var averageWeight = 0;
// var counter = 0;

// for (var key in weights) {
// 	commonWeight += weights[key];
// 	counter++
// }
// averageWeight = commonWeight / counter;

// console.log(averageWeight);







// var weights = {
// 	anton: 80,
// 	ivan: 85,
// 	dima: 70,
// 	inna: 40,
// 	valera: 68
// }

// var commonWeight = 0;
// var averageWeight = 0;
// var counter = 0;

// for (var key in weights) {
// 	if (weights[key] > 70) {
// 		commonWeight += weights[key];
// 		counter++
// 	}
// }

// averageWeight = commonWeight / counter;

// console.log(commonWeight, averageWeight);






// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// for (var i = 0; i < months.length; i++) {
// 	console.log(months[i]);
// }





// var fn = function () {
// 	console.log('fn');
// }
// fn();


// fn2();
// function fn2(args) {
// 	console.log('fn2');
// }





// var global = 0;
// function fn (args) {
// 	var local = 1;
// 	console.log('fn');
// }


// var fn2 = () => {
// 	var local = 2;
// }
// console.log(global, local);






// function sum (a, b) {
// 	return a + b;
// }
// console.log(sum(5,7));





// function sum (a, b) {
// 	console.log(arguments);
// }
// console.log(sum(5,7));





// function sum (a, b, c, d) {
// 	var firstNumber = 20;
// 	var secondNumber = 30;
// 	for (var key in arguments) {
// 		console.log(arguments[key]);
// 	}
// }
// sum(1,2,3,4);





// var a = 3, b = 4;

// function sum (a, b) {
// 	return this.a + this.b + a + b;
// }
// console.log(sum(1,2));






var a = 3, b = 4;

function sum (a, b) {
	!function(that) {
		console.log(that.a);
	}(that);
	return this.a + this.b + a + b;
}
console.log(sum(1,2));