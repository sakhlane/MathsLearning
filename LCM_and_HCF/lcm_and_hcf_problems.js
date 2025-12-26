// LCM and HCF 

/*
🟢 Problem 1: LCM of Two Numbers (Basic)

Difficulty: Easy

Problem:
Given two positive integers a and b, find their Least Common Multiple (LCM).

Input:
Two integers a and b

Output:
Print their LCM

Example:

Input:
4 6

Output:
12 */

function lcmOfTwoNumbers(a,b){
    // get the greatest number 
    let max = Math.max(a,b); //to get the max number 
    let aMultiples = [];
    let bMultiples = [];
    for(let i=1; i<=max ; i++)
    {
        aMultiples.push(a*i);
        bMultiples.push(b*i);
    }
    console.log(aMultiples,bMultiples);
    // find common in both 
    let common =[];
    for(let i=0; i<max; i++){
        for(let j=0; j<max; j++){
            if(aMultiples[i] === bMultiples[j]){
                common.push(aMultiples[i]);
            }
        }
    }
    let lcm = common[0];
    let hcf = common[common.length -1] //hcf and gcd are same 
    console.log(common);
    console.log(lcm)
}
// lcmOfTwoNumbers(4,6)

// find gcd or hcf of two numbers
function find_gcd(a,b){
    let min = Math.min(a,b) // get min number
    let gcd = 1  // assume gcd is 1 

    //find the gcd using loop
    for(let i=1; i<=min; i++){
        if(a % i === 0 && b % i === 0){
            gcd = i;
        }
    }
    console.log(gcd);
}
//  find_gcd(4,6)

// function gcd [Euclidean Algorithm]
function gcd(a,b){
    while(b !== 0 ){
        let reminder = a % b;
        a = b;
        b = reminder;
    }
    return a
}
// gcd(18,48)

// find lcm with using gcd 
function lcm(a,b){
    return (a*b) / gcd(a,b);
}

let lcmResult = lcm(4,6)
console.log(lcmResult)