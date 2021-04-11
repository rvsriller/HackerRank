/**
 *  Today, we will learn about the Array data structure
    Task
    Given an array, A, of N integers, print A's elements in reverse order
    as a single line of space-separated numbers.

    A = [1, 2, 3, 4];
    Print 4 3 2 1. Each integer is separated by one space.

 */

function main() {

    // 'n' contains the number of elements in array A
    const n = parseInt(readLine(), 10);

    // reverseOrder will receive each element from A in the order required
    let reverseOrder = '';

    /* 'a' reads the input array, remove '' symbols and map each item changing it to an integer
        as in the example aside >> before readline ["1", "2", "3", "4"] - after map [] 1, 2, 3, 4 ]
    */
    let a = readLine().split(' ').map(item => parseInt(item, 10));
    
    /* As it was required, the elements are reversed in the array 'a' followed by
        a forEach to add every element with a space " " inside the variable reverseOrder
    */
    a.reverse().forEach(n => {
        reverseOrder += n + " ";
    });
    
    console.log(reverseOrder);
}