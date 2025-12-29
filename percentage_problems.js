// percentage problems 
/*1️⃣ Percentage of Marks

Problem:
A student scores A marks out of B. Find the percentage scored, rounded down to the nearest integer.

Input:
Two integers A and B

Output:
Single integer — percentage

Example:
Input: 45 50
Output: 90 */


function percentageOfMarks(a,b){
    let result = a/b * 100;
    console.log(result);
}
// percentageOfMarks(45,50)

/*
2️⃣ Discount Calculator

Problem:
An item costs P. A discount of D% is applied. Find the final price.

Input:
Two integers P and D

Output:
Final price after discount (integer)

Example:
Input: 1000 25
Output: 750 */

function discountCalculator(p,d){
    // findout discount amout 
    disAmount = d/100 * p;
    // console.log(disAmount)
    // less the discount amount from original price to get total price
    total_price = p - disAmount;
    console.log(total_price);   
}
// discountCalculator(1000,25)
/*
3️⃣ Pass or Fail

Problem:
A student passes if their percentage is at least 40%.
Given obtained_marks and total_marks, print PASS or FAIL. */

function passOrFail(marks,totalMarks){
    if( (marks/totalMarks) * 100 >= 40){
        console.log('pass')
    }else{
        console.log('fail')
    }
}
// passOrFail(471,600)
/*
🟡 Medium Level (Conditionals + Edge Cases)
4️⃣ Percentage Increase

Problem:
Given an old value O and new value N, calculate the percentage increase.
If there is no increase, print 0.

Output:
Integer percentage

Example:
Input: 50 75
Output: 50 */

function percentageIncrease(old,latest){
  if(latest <= old){
    console.log(old)
}
  else{
     let increase = latest - old;
    //  increase percentage based on old value
     let increasePer = (increase / old) * 100;
     console.log(increasePer)
  }
}
percentageIncrease(50,75)
/*
5️⃣ Salary Revision

Problem:
An employee gets:

10% raise if salary ≤ 10,000

7% raise if salary ≤ 20,000

5% raise otherwise

Find the new salary. */


