//1
//with taking third variable
//var a = 10
//var b = 20

// var c = a
// var a = b
// var b = c

// console.log(a, b)

//with mathemetical equation
//var a = a+b
//var b = a-b
//var a = a-b

//console.log(a, b)

//2
//max num between two num
//var a = 200
//var b = 1000

//using conditional operator

//var big = a>b ? a:b
//console.log("maximum number is" , big)

//using control statement
//var big

//if(a>b){
	//big = a
//}else{
	//big = b
//}

//console.log("maximum number is" , big)

//3
// maximum between three numbers

// var a = 10000
// var b = 200
// var c = 300

// var big
//using control statement
// if(a>b){
// 	if(a>c){
// 		big = a
// 	}else{
// 	big = c
//     }
// }else{
// 	if(b>c){
// 		big = b
// 	}else{
// 		big = c
// 	}
// }

// console.log(big)

// var big = (a>b) ? (a>c ? a:c) : (b>c ? b:c)
// console.log(big)



//4
//number is negative, positive or zero

// var a = 0
// if(a>=0){
//       if(a==0){
//       	console.log("zero")
//       }else{
//       	console.log("positive")
//       }
// }else{
// 	console.log("negative")
// }


//5
//number is divisible by 5 and 11 or not
//using conditional statement
// var a = 55
// if(a%5==0){
// 	if(a%11==0){
// 			console.log("divisible by 5 and 11")
// 		}else{
// 			console.log("not divisible by 5 and 11")
// 		}
	
// }else{
// 	console.log("not divisible by 5 and 11")
// }



//6
//number is even or odd
//using conditional statement

// var a = 46
// if(a%2==0){
// 	console.log("it is even")
// }else{
// 	console.log("it is odd")
// }


//7
// year is leap year or not
//using conditional statement

// var a = 2009
// if(a%4==0){
// 	if(a%100==0){
// 		if(a%400==0){
// 			console.log("this is a leap year")
// 		}else{
// 			console.log("this is not a leap yaer")
// 		}
// 	}else{
// 		console.log("this is a leap yaer")
// 	}
// }else{
// 	console.log("this is not a leap yaer")
// }


//8
//check whether it is vowel or consonant


// ch = "i"
// if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ){
// 	console.log("it is vowel")
// }else{
// 	console.log("it is consonant")
// }




//9
//input week number and print week day

// var 1 = 'monday'
// var 2 = 'tuesday'
// var 3 = 'wednesday'
// var 4 = 'thursday'
// var 5 = 'friday'
// var 6 = 'saturday'
// var 7 = 'sunday'
	
// day = 1
// if(day == "1" || day == "2" || day == "3" || day ==  "4" || day == "5" || day== "6" || day == "7"){
// 	console.log(day)
// }else{
// 	console.log(day)
// }



//12
//triangle is valid or not

// var a = 60
// var b = 60
// var c = 60

// var d = a + b + c

// if(d==180){
// 	console.log("triangle is valid")
// }else{
// 	console.log("triangle is not valid")
// }




//13
//input all sides of a triangle and check whether triangle is valid or not

// var a = 12
// var b = 11
// var c = 13

// var d = a + b
// var e = a + c
// var f = b + c

// if(d>c){
// 	if(e>b){
// 		if(f>a){
// 			console.log("triangle is valid")
// 		}else{
// 			console.log("triangle is not valid")
// 		}
// 	}else{
// 		console.log("triangle is not valid")
// 	}
// }else{
// 	console.log("triangle is not valid")
// }




//14
//triangle is equilateral, isosceles or scalene triangle

// var a = 5
// var b = 0
// var c = 4

// if (a==b && a==c && b==c){
// 	console.log("triangle is equilateral")
// }else{
// 	if(a==b || a==c || b==c){
// 		console.log("triangle is isosceles")
// 	}else{
// 		if(a!=b || a!=c || b!=c){
// 			console.log("triangle is scalene")
// 		}else{
// 			console.log("not a triangle")
// 		}
// 	}
// }

//15
//all roots of a quadratic equation

//  a = -4
//  b = 2
//  c = 2

// d = (b*b)-(4*a*c)
//  d= Math.sqrt(d)

//  d = (-b)+(d)

//  e = (-b)-(d)

//  // d = d/(2*a)
//  // e = e/(2*a)
// console.log(d, e)


//16
// calculate profit or loss

// var purchase = "70"
// var sell = "60"

// var profit = sell-purchase
// var loss = purchase-sell
// if(profit>0){
// 	console.log("profit of" , profit)
// }else{
// 	console.log("loss of " , loss)
// }


//17
// marks of five subjects

// var phy = 90
// var che = 70
// var math = 80
// var bio = 80
// var comp = 90

// var total = phy+che+math+bio+comp
// var per = total/5

// console.log(per)
// if(per>=90){
// 	console.log("grade:a")
// }else{
// 	if(per>=80){
// 		console.log("grade:b")
// 	}else{
// 		if(per>=70){
// 			console.log("grade:c")
// 		}else{
// 			if(per>=60){
// 				console.log("grade:d")
// 			}else{
// 				if(per>=50){
// 					console.log("grade:e")
// 				}else{
// 					if(per>=40){
// 						console.log("grade:f")
// 					}
// 				}
// 			}
// 		}
// 	}
// }



//18
// basic salary of an employee

var a = 10000
var b = 20000

var c = (a*20/100)
var d = (a*80/100)
console.log(c, d)