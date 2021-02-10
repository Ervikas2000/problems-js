//1
//with taking third variable
//var a = 10
//var b = 20

// var c = a
// var a = b
// var b = c

// console.log(a, b)





//2
//with mathemetical equation
//var a = a+b
//var b = a-b
//var a = a-b

//console.log(a, b)





//3
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






//4
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







//5
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







//6
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






//7
//number is even or odd
//using conditional statement

// var a = 46
// if(a%2==0){
// 	console.log("it is even")
// }else{
// 	console.log("it is odd")
// }









//8
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









//9
//check whether it is vowel or consonant


// ch = "z"
// if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ){
// 	console.log("it is vowel")
// }else{
// 	console.log("it is consonant")
// }








//10
//input week number and print week day

// var daynumber = 2
// var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
// if(daynumber>0 && daynumber<=7){
// 	console.log(days[daynumber-1])
// }else{
// 	console.log("invalid week day")
// }







//11
// input month number and print number of days in that month


// var monthnumber = 1
// var days = ['31', '29', '31', '30', '31', '30', '31', '31','30', '31', '30', '31']
// if(monthnumber>0 && monthnumber<=12){
// 	console.log(days[monthnumber-1])
// }else{
// 	console.log("invalid month number")
// }





//12
//count total number of notes in given amount

// var amount = 584468

// var notes = {
//     2000:0,
//     500:0,
//     200:0,
//     100:0,
//     50:0,
//     20:0,
//     10:0,
//     5:0,
//     2:0,
//     1:0
// }

// //check for 2000
// if(amount >= 2000){
//     notes[2000] = (amount-amount%2000)/2000
//     amount = amount-notes[2000]*2000
// }

// //check for 500
// if(amount>=500){
//     notes[500] = (amount-amount%500)/500
//     amount = amount-notes[500]*500
// }


// //check for 200
// if(amount>=200){
//     notes[200] = (amount-amount%200)/200
//     amount = amount-notes[200]*200
// }


// //check for 100
// if(amount>=100){
//     notes[100] = (amount-amount%100)/100
//     amount = amount-notes[100]*100
// }


// //check for 50
// if(amount>=50){
//     notes[50] = (amount-amount%50)/50
//     amount = amount-notes[50]*50
// }

// //check for 20
// if(amount>=20){
//     notes[20] = (amount-amount%20)/20
//     amount = amount-notes[20]*20
// }

// //check for 10
// if(amount>=10){
//     notes[10] = (amount-amount%10)/10
//     amount = amount-notes[10]*10
// }



// //check for 5
// if(amount>=5){
//     notes[5] = (amount-amount%5)/5
//     amount = amount-notes[5]*5
// }


// //check for 2
// if(amount>=2){
//     notes[2] = (amount-amount%2)/2
//     amount = amount-notes[2]*2
// }


// //check for 1
// if(amount>=1){
//     notes[1] = (amount-amount%1)/1
//     amount = amount-notes[1]*1
// }

// console.log(notes)








//13
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






//14
//input all sides of a triangle and check whether triangle is valid or not

// var a = 12
// var b = 30
// var c = 22

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






//15
//triangle is equilateral, isosceles or scalene triangle

// var a = 0
// var b = 5
// var c = 5


// if(a && b && c>0){
// 	if(a==b && b==c){
// 		console.log("triangle is equilateral")
// 	}else{
// 		if(a==b || b==c || a==c){
// 			console.log("triangle is isosceles")
// 		}else{
// 			if(a!=b || b!=c || a!=c){
// 				console.log("triangle is scalene")
// 			}
// 		}
// 	}
// }else{
// 	console.log("invalid triangle sides")
// }







//16
//all roots of a quadratic equation


// var a = 1
// var b = 5
// var c = 4

// var d = b*b - 4*a*c

// if(d >= 0){
//     var alpha = (-b - Math.sqrt(d))/2*a
//     var beta = (-b + Math.sqrt(d))/2*a

//     console.log(alpha, beta)
// }else{
//     console.log('imaginary roots')
// }






//17
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






//18
// marks of five subjects

// var phy = 90
// var che = 70
// var math = 80
// var bio = 80
// var comp = 90

// var total = phy+che+math+bio+comp
// var per = total/5

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








//19
//input basic salary of an employee and calculate its Gross salary

// var basicsalary = 150000

// if(basicsalary<=10000){
// 	hr = (basicsalary*20)/100
// 	da = (basicsalary*80)/100
// }else if(basicsalary<=20000){
// 	hr = (basicsalary*25)/100
// 	da = (basicsalary*90)/100
// }else {
// 	hr = (basicsalary*30)/100
// 	da = (basicsalary*95)/100
// }

// var grosssalary = basicsalary + hr + da

// console.log(grosssalary)














//21
//tax calculator

// var income = 450000

// if(income<=250000){
// 	tax = (income*0)/100
// 	console.log(tax)
// }else if(income<=500000){
// 	tax = (income*5)/100
// 	console.log(tax)
// }else if(income<=750000){
// 	tax = (income*10)/100
// 	console.log(tax)
// }else if(income<=1000000){
// 	tax = (income*15)/100
// 	console.log(tax)
// }else if(income<=1250000){
// 	tax = (income*20)/100
// 	console.log(tax)
// }else if(income<=1500000){
// 	tax = (income*25)/100
// 	console.log(tax)
// }else if(income>1500000){
// 	tax = (income*30)/100
// 	console.log(tax)
// }








//22
//calculate year month days hour min 

var second = 254794321

var number ={
	year:0,
	month:0,
	day:0,
	hour:0,
	min:0,
	sec:0
}

//check for year
if(second>=31536000){
     number[31536000]= (second-second%31536000)/31536000
    second = second-number[31536000]*31536000
}



//check for month
if(second>=2592000){
	number[2592000]= (second-second%2592000)/2592000
    second = second-number[2592000]*2592000
}



//check for day
if(second>=86400){
	number[86400] = (second-second%86400)/86400
    second = second-number[86400]*86400
}



//check for hour
if(second>=3600){
	number[3600] = (second-second%3600)/3600
    second = second-number[3600]*3600
}



//check for min
if(second>=60){
	number[60] = (second-second%60)/60
    second = second-number[60]*60
}



//check for sec
if(second<=59){
	number[59] =second
}

console.log( number)