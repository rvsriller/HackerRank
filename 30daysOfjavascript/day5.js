/**
 *  Day 6 - In this challenge, we will use loops to do some math

    Task
    Given an integer, N, print its first 10 multiples. Each multiple n x i (where i <= n <= 10)
    should be printed on a new line in the form: n x i = result.

    Example n = 3
    The printout should look like this:

    3 x 1 = 3
    3 x 2 = 6
    3 x 3 = 9
    3 x 4 = 12
    3 x 5 = 15
    3 x 6 = 18
    3 x 7 = 21
    3 x 8 = 24
    3 x 9 = 27
    3 x 10 = 30

 */

function main() {
    const n = parseInt(readLine(), 10);

    if (n >= 2 && n <= 20){

        for(let i = 1; i <= 10; i++){
            let total = n * i;
            console.log(`${n} x ${i} = ${total}`);
        }

        /* Or using while loop 
        let i = 1;

        while(i <= 10){
            let total = n * i;
            console.log(`${n} x ${i} = ${total}`);
            i++;
        }
        */
    }
}