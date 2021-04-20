/**
  Day 6 - Review
  
  Today we will expand our knowledge of strings, combining it with what we have already learned about loops
  
  Task
  Given a string, S, of length N that is indexed from 0 to N-1, print its even-indexed and odd-indexed characters 
  as 2 space-separated strings on a single line (see the Sample below for more detail).

  Example
  s = 'abcdef'
  Print abc def

  Input Format
  2
  Hacker
  Rank

  Output 
  Hce akr
  Rn ak

*/

function processData(input) {
  //Enter your code here
  let string = input.split('\n').slice(1);
  
  string.forEach((str) => {
    let evenStr = '';
    let oddStr = '';
      for(let i = 0; i < str.length; i++) {
          i % 2 ? oddStr += str[i] : evenStr += str[i];
      }
      console.log(`${evenStr} ${oddStr}`);
  });
} 
