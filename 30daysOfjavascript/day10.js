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


    
    //calculate maximum number of consecutive 1's in the binary representation of (n)
    let result =  Math.max.apply(null, 
                    n.toString(2). //Converts it to binary
                    split("0"). // Creates an array without "0"s
                    map(x => x.length) //Counts number of "1"s
                  );
