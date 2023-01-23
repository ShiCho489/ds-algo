function addNums(n) {
    total = 0;
  
    for (let i = 1 ; i <= n ; i++) {
      total += i;
    }
  
    return total;
  }

  /*clean way to get timing benchmarks
  
  console.time("Timer 1");

  console.timeLog("Timer 1");  // Timer 1: 0.104ms

  console.timeEnd("Timer 1"); // Timer 1: 3.292ms

  console.time("addNums");
  addNums(1000000);
  console.timeEnd("addNums");// addNums: 16.211ms */

  startTime = Date.now();
  addNums(1000000);
  endTime = Date.now();

  console.log(startTime); // 1674493371410
  console.log(endTime); //1674493412581

  /*Taking the difference between the end and start times 
  will tell you how long the code took to run.*/

  console.log(`Runtime: ${endTime - startTime}ms`); 
  //runtime: 24ms