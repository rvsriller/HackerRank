
    
    //calculate maximum number of consecutive 1's in the binary representation of (n)
    let result =  Math.max.apply(null, 
                    n.toString(2). //Converts it to binary
                    split("0"). // Creates an array without "0"s
                    map(x => x.length) //Counts number of "1"s
                  );
