// problem on factor 
// factor => is a number which is compltely divides the number ex:- 3 is a factor of 12
/*
1️⃣ Print All Factors

Problem:
Given an integer n, print all its factors in ascending order.

Input:
n

Output:
Space-separated factors of n

Example:
Input: 12
Output: 1 2 3 4 6 12 */

function allFactors(num){
    let factors = []
    for(let i =1; i<=num ; i++){
        if(num % i === 0){
            factors.push(i)
        }
    }
    console.log(factors);
}

// allFactors(12)

/*
2️⃣ Count Factors

Problem:
Given a number n, find how many factors it has.

Example:
Input: 10
Output: 4
(1, 2, 5, 10) */

// count factor
function factorCount(num){
    let Count = 0;
    for(let i=1; i<=num; i++){
        if(num % i === 0){
            Count++;
        }
    }
    console.log(Count);
}
// factorCount(12);
/*
3️⃣ Check Prime Using Factors

Problem:
Given n, determine whether it is Prime or Not Prime by counting its factors.

Output:
Print "Prime" or "Not Prime" */

//  Note :- A prime number is a number which is only divisible by 1 or itself ;
function isPrime(num){
    let count = 0;
    for(let i =1; i<=num; i++){
        if(num % i === 0){
            count++;
        }
    }
    if(count === 2)
        console.log("Prime")
    else console.log("not Prime")
}

// isPrime(5);
/*
4️⃣ Sum of Factors

Problem:
Given n, calculate the sum of all its factors.

Example:
Input: 6
Output: 12
(1 + 2 + 3 + 6) */

// sum of factors
function sumOfFactors(num){
    let sum =0;
    for(let i =1; i<=num; i++){
        if(num % i === 0){
            sum +=i;
        }
    }
    console.log(sum)
}
// sumOfFactors(6)

/*
5️⃣ Perfect Number Check

Problem:
A number is called Perfect if the sum of its proper factors (excluding itself) equals the number.

Input:
n

Output:
Print "Perfect" or "Not Perfect"

Example:
Input: 28
Output: Perfect */

function isPerfectNum(num){
    let sum =0;
    for(let i =1; i<num; i++){
        if(num % i === 0){
            sum += i;
        }
    }
    if(sum === num)
        console.log("Perfect")
    else console.log("not Perfect")
}

// isPerfectNum(28)

/*
6️⃣ Factors in a Range

Problem:
Given two numbers n and k, print all factors of n that are less than or equal to k. */

function factorsInRange(n,k){
    let factors = [];
    for(let i =1;i<=k; i++){
        if(n % i === 0){
            factors.push(i)
        }
    }
    console.log(factors)
}
// factorsInRange(15, 12)

/*
8️⃣ Largest Proper Factor

Problem:
Given n, find its largest proper factor (excluding n itself).

Example:
Input: 15
Output: 5 */

// largest proper factor 
function largestProperFactor(num){
    let factors = []
    for(let i =1; i<num; i++){
        if(num % i === 0){
            factors.push(i)
        }
    }
    console.log(factors[factors.length - 1]) // get the largest factor from array
}

// largestProperFactor(15)
/*
9️⃣ Common Factors

Problem:
Given two integers a and b, find the number of common factors between them. */

function countCommonFactor( a, b){
    let count = 0;
    /*
    if(a>b){
        for(let i =1 ; i<=a ; i++){
            if(a % i === 0 && b % i === 0){
                count++
            }
        }
    }else if(b>a){
        for(let i =1 ; i<=a ; i++){
            if(a % i === 0 && b % i === 0){
                count++
            }
        }
    } */ // Note:-  Not optimize Same code repetation 

    let limit = Math.max(a,b) // takes the max number between a , b
    for(let i =0; i<=limit; i++){
        if(a % i === 0 && b% i ===0){
            count++;
        }
    }

    console.log(count);
}
countCommonFactor( 12,18)
/*
🔟 Numbers With Exactly K Factors

Problem:
Given two integers n and k, count how many numbers from 1 to n have exactly k factors.

Example:
Input: n = 10, k = 2
Output: 4
(2, 3, 5, 7) */

function countExactKFactor(n,k){
    let factors = []  // to store every number factors
    let result = [] // to store the number which have exact factor 
    
    while (n>0){
        for(let i = 1; i<=n ; i++){
            if(n % i === 0){
                factors.push(i)
            }
        }
        if(factors.length === k){
            result.push(n);
        }
        factors = []; // empty factors array to store next number factor 
    }
}

countExactKFactor(10,2)
