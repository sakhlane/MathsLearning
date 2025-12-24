// practice divisibility problems
/*1️⃣ Divisible by 3 

Given an integer N, determine whether it is divisible by 3.

Input:
A single integer N

Output:
Print "YES" if N is divisible by 3, otherwise print "NO".

Example:
Input: 123
Output: YES */

// is divisible by 3 

function divisibleBy3(input){
    // check if input is divisible by 3
    if(input % 3 === 0)
    {
        console.log('Yes')
    }
    else{
    console.log('No')
    }
}

//  divisibleBy3(123);

 /*2️⃣ Divisible by 5 and 11

Given an integer N, check if it is divisible by both 5 and 11.

Input:
N

Output:
YES or NO */

// is divisible by 5 and 11 both
function divisibleBy5And11(input){
    // check if input is divisible by 5 and 11 both
    if(input % 5 === 0 && input % 11 === 0)
        console.log('Yes')
    else 
        console.log('No')
    
}

// divisibleBy5And11(55)

/*3️⃣ Count divisible numbers in a range

Given three integers L, R, and K, count how many numbers between L and R (inclusive) are divisible by K.

Input:
L R K

Output:
An integer count

Example:
Input: 1 20 4
Output: 5 */

function countDivisibleNumberInRange(L,R,K){
    let count = 0;
    for(let i=L ; i<=R; i++){
        if(i % K === 0){
            count +=1; 
        }
    }
    console.log(count);
}
// countDivisibleNumberInRange(1,40,4)

/* 4️⃣ Sum of digits divisibility

Given an integer N, determine if the sum of its digits is divisible by 9.

Input:
N

Output:
YES or NO */

function sumOfDigitsDivisibleBy9(number){
    let sum = 0;
    while(number > 0){
        sum = sum + number % 10; // get last digit 
        number = Math.floor(number / 10) // to remove last digit
        // Note :- javascript divides based on floting point thats why we have to floor the number 
    }
    console.log(sum)
    // check if sum divisible by 9
     if(sum % 9 === 0)
        console.log("Yes")
     else 
        console.log('No')
}

// sumOfDigitsDivisibleBy9(1233)
/*
5️⃣ Divisible pairs

Given an array of N integers and an integer K, count the number of pairs (i, j) such that:

i < j

(arr[i] + arr[j]) is divisible by K

Input:

N K
a1 a2 a3 ... aN


Output:
Number of valid pairs */ 

function divisiblePairs(n,k){
    let pairs = 0;
    for(let i=0; i<n.length ; i++){
        for(let j=i+1; j<n.length; j++ ){
            if((n[i] + n[j] ) % k === 0){
                /* Note :- modulo oparator has highest presidence than + oparator 
                so we first add then checks divisibility*/
                pairs ++;
            }
        }
    }
    console.log(pairs)
}
divisiblePairs([1,2,3,4],3)