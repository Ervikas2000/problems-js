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
// start = 5
// count = 15
// sum = 0
// for (var i=start; i<=count; i++){
// 	sum +=i
// }
//  average = sum/10
// console.log("sum is", sum, "and average is", average)



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
// 	tbl = testdata+'X'+i+'='+tabel
// 	console.log(tbl)
// }






//7
//display the multipliaction table vertically from 1 to n

// var n = 10

// for(var i=1; i<=10; i++){
//     var tblStr = ""
//     for(var j = 1; j<=n; j++){
//         tblStr += j+"x"+i+" = "+i*j+" "
//     }
//     console.log(tblStr)
// } 


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






//18
//program to find the sum of the series [ 1-X^2/2!+X^4/4!- .........]

// function fact(n){

//     if(n==0){
//         return 1
//     }

//     var f = 1;
//     for(var i=1; i<=n; i++){
//         f *= i
//     }
//     return f
// }

// function pow(a, b){
//     var p = 1
//     for(var i=1; i<=b; i++){
//         p *= a
//     }
//     return p
// }

// var numOfTerms = 5
// var x = 2

// var count = 1
// var i = 0
// var res = 0
// while(count<=numOfTerms){
//     if(i%2 == 0){
//         var calc = pow(x, i)/fact(i)
//         if(count%2==0){
//             res -= calc
//         }else{
//             res += calc
//         }
//         count ++
//     }
//     i++
// }

// console.log(res) 









//19
//program to display the n terms of harmonic series and their sum

// var a = 1
// var n = 5
// var sum =0

// for(var i=1; i<=n; i++){
// 	series = a/i
// 	sum += series
// 	console.log(series)
// }
// console.log("sum is ", sum)








//21
//program to display the sum of the series [ 9 + 99 + 999 + 9999 ...]

// var a = 10
// var n = 5
// sum = 0

// function pow(a, b){
//     var p = 1
//     for(var i=1; i<=b; i++){
//         p *= a
//     }
//     return p
// }

// for(var i=1; i<=n; i++){
// 	series = pow(a,i)-1
// 	sum += series
// 	console.log(series)
// }
// console.log("sum is",sum)






//25
//program to display the n terms of square natural number and their sum

// terms = 5
// sum = 0

// for (var i=1; i<=terms; i++){
// 	s = i*i
// 	sum += s
// 	console.log(s)
// }
// console.log("sum is", sum)








//26
//program to find the sum of the series 1 +11 + 111 + 1111 + .. n terms


// var a = 10
// var n = 5
// sum = 0

// function pow(a, b){
//     var p = 1
//     for(var i=1; i<=b; i++){
//         p *= a
//     }
//     return p
// }

// for(var i=1; i<=n; i++){
// 	series = (pow(a,i)-1)/9
// 	sum += series
// 	console.log(series)
// }
// console.log("sum is",sum)







//27
//Write a program to check whether a given number is a perfect number or not

// number = 6
// sum = 0
 
//  for(var i=1; i<=number-1; i++){
//  	if(number%i==0){
//  		console.log(i)
//  		sum += i
//  	}
//  }
//  console.log("The sum of the divisor is", sum)

//  if(sum==number){
//  	console.log("this is perfect number")
//  }else{
//  	console.log('this is not perfect number')
//  }








//28
//program to find the perfect numbers within a given number of range






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






