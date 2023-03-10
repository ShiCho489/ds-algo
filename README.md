Timing Benchmarks
One way of measuring your code's efficiency is to run a function and time how long it takes to complete. You can use these results to benchmark the relative performance of your function with various inputs.

Timing your code

Say you have written a function, addNums(n) that adds up every positive integer from 1 to n.

function addNums(n) {
  total = 0;

  for (let i = 1 ; i <= n ; i++) {
    total += i;
  }

  return total;
}

How long does this function take to run? It depends on the value of n. You will learn two JavaScript methods, console.time() and Date.now() to find out.

While console.time is convenient for quick tests, the label and the time unit at the end make the data difficult to chart on a graph. Next, you will learn another way to track timing data, which can be easily charted in Google Sheets.


Date.now()
Type Date.now() into a Node terminal and you will receive a large integer. This number represents the number of milliseconds (1/1000th of a second) since the morning of January 1st, 1970, a time also known as the Unix Epoch.

