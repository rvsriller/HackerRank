/*  Longest solution
    const n = parseInt(readLine(), 10);    
    let stack = [], reminder = '', counter = 0;
    
    //Transform number to binary
    while(n > 0){
        reminder = n % 2;
        n = Math.floor(n / 2);
        
        //Insert reminder to stack ex: 01101 push(1) -> 011011
        stack.push(reminder);
    }
    
    //Using sort to compare two elements in row, if they are equal to one, there is a sequence!
    stack.sort((a, b) => {
        if(reminder == 1 && counter == 0){
            counter = 1;
        }else if(a == 1 && b == 1) {
            counter++;
        }
        
    })
    
    //Showing how many 11's exists 
    console.log(counter);
*/

    //Shorter solution
    const n = parseInt(readLine(), 10); //Read the number and change it to Integer

    /*
        Explaning how Math.max.app() works
        https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max

        Math.max() returns the bigger number, for example, (20, 30) -> 30 is bigger
        It is also possible to find it using reduce()

        Math.max.appy() returns the bigger number in an array!
        In this case, Math.max.apply uses variable(n) as array
        https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/apply


        toString(base) allows to convert the string in base 2 - 36 as parameter
        https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

        Split("0") creates an array and removes symbols 0's of this string (n) ex: 100111 -> [1][1][1][1]

  
    */    
    
    //it calculates the maximum number of consecutive 1's in the binary representation of (n)
    let result =  Math.max.apply(null, 
                    n.toString(2). //Converts it to binary
                    split("0"). // Creates an array without "0"s
                    map(x => x.length) //Counts number of "1"s
                  );


    //Printing the final result!
    console.log(result);  