//1
//program to display the first 10 natural numbers

// for(var i=1; i<=10; i++){
// 	console.log(i)
// }





//2
//program to find the sum of first 10 natural numbers

// sum = 0

// for(var i=1; i<=10; i++){
// 	console.log(i)
// 	sum +=i
// }
// console.log("sum of first 10 natural numbers is", sum)





//3
// display n terms of natural number and their sum

// testdata = 7
// sum = 0

// for(var i=1; i<=testdata; i++){
// 	console.log(i)
// 	sum +=i
// }
// console.log("sum of n term is", sum)





//4
//read 10 numbers from keyboard and find their sum and average





//5
//display the cube of the number upto given an integer

// testdata = 10

// for(var i=1; i<=testdata; i++){
// 	(cube = i*i*i)
// 	console.log("number is :", i, "and cube is", cube)
// }




//6
//display the multiplication table of a given integer

// testdata = 12

// for(var i=1; i<=10; i++){
// 	tabel = i*testdata
// 	console.log("%d * %d = %d \n", testdata,  i, tabel)
// }






//7
//display the multipliaction table vertically from 1 to n




//8
//display the n terms of odd natural number and their sum

// number = 10
// i = 1
// sum = 0

// while(i<=number){
// 	if(i%2!=0){
// 		sum = i+sum
// 		console.log(i,)
// 	}
// 	i++
// }
// console.log("sum of odd number is", sum)




//15
//calculate the factorial of a given number

// number = 9
// fact = 1

// for(var i=1; i<=number; i++){
// 	fact = i*fact

// }
// console.log(fact)





//16
//display the n terms of even natural number and their sum

// number = 10
// i = 1
// sum = 0

// while(i<=number){
// 	if(i%2==0){
// 		sum = i+sum
// 		console.log(i,)
// 	}
// 	i++
// }
// console.log("sum of enen number is", sum)




//37
// program to display the number in reverse order

// n = 5

// for(var i=1; i<=n; i++){
// 	rev = 1+(n-i)
// 	console.log(rev)
// }





//39
//program to find the number and sum of all integer between 100 and 200 which are divisible by 9

// sum = 0
// for(var i=100; i<=200; i++){
// 	if(i%9==0){
// 		sum = sum+i
// 		console.log(i)
// 	}
// }
// console.log("sum is", sum)






//47
//program to check whether a number is a Strong Number or not

number = 14
a = 1
b = 4
c = 0
fact1 = 1
fact2 = 1
fact3 = 1

for(var i=1; i<=a; i++){
	fact1 = i*fact1

}

for(var i=1; i<=b; i++){
	fact2 = i*fact2

}

for(var i=1; i<=c; i++){
	fact3 = i*fact3

}
sum = fact1+fact2+fact3

if(sum==number){
	console.log("number is Strong")
}else{
	console.log("number is not Strong")
}
console.log(sum)
