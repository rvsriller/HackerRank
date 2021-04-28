/*
    Day 9 - Recursion
    Algorithmic concept called recursion using factorial(n)
    
    factorial(n) = n * (factorial(n-1));
    5! = 5 x 4 x 3 x 2 x 1 

*/


function factorial(n) {
    
    if(n == 0 || n == 1){
        return 1;
    }else{
        return (n * factorial(n-1));;
    }
    
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let result = factorial(n);

    ws.write(result + "\n");

    ws.end();
}
