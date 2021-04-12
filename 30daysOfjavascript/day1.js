/* 
    Datatypes

    Task
    Complete the code in the editor below. The variables i, d, and s are already declared and initialized for you. You must:

    Declare  variables: one of type int, one of type double, and one of type String.
    Read N lines of input from stdin (according to the sequence given in the Input Format section below) and initialize your  variables.
    Use the  operator to perform the following operations:
    Print the sum of i plus your int variable on a new line.
    Print the sum of d plus your double variable to a scale of one decimal place on a new line.
    Concatenate s with the string you read as input and print the result on a new line.
*/

function main (){
// Variables 
    var i = 4
    var d = 4.0
    var s = "HackerRank "

// Declare second integer, double, and String variables.
    var j, e, t;
    
    // Read and save an integer, double, and String to your variables.
    j = parseInt(readLine());
    e = parseFloat(readLine());
    t = readLine();
    
    // Print the sum of both integer variables on a new line.
    console.log(i + j);
    
    // Print the sum of the double variables on a new line.
    console.log((d + e).toFixed(1));
    
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + t); 
}