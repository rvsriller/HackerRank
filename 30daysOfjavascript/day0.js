/**
    Task
    To complete this challenge, you must save a line of input from stdin to a variable,
    print Hello, World. on a single line, and finally print the value of your
    variable on a second line.

    Sample imput
    Welcome to 30 Days of Code!

    Sample Output
    Hello, World. 
    Welcome to 30 Days of Code!

 */

function processData(inputString) {
    // This line of code joins the first message and the contents of 'inputString'
    let message = 'Hello, World.\n' + inputString;
    
    // This line of code prints all the contents required as output
    console.log(message);
}