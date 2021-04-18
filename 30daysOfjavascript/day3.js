/**
    Day 3 - Conditional Statements
    
    Task
    In this challenge, we learn about conditional statements
    
    Given an integer, N, perform the following conditional actions:
    If N is odd, print 'Weird'
    If N is even and in the inclusive range of 2 to 5, print 'Not Weird'
    If N is even and in the inclusive range of 6 to 20, 'print Weird'
    If N is even and greater than 20 , print 'Not Weird'

 */

function main() {
    const N = parseInt(readLine(), 10);
    var message;
    
    if(N % 2 != 0){
       message = 'Weird'; 
    } else if(N >= 2 && N < 5){
       message = 'Not Weird'; 
    } else if(N >= 6 && N <= 20){
        message = 'Weird';
    }else if(N > 20){
        message = 'Not Weird';
    }
   
    console.log(message);
}