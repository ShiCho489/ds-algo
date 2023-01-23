function addNums(n) {
    total = 0;
  
    for (let i = 1 ; i <= n ; i++) {
      total += i;
    }
  
    return total;
  }
  
  console.time("Timer 1");

  console.timeLog("Timer 1");  // Timer 1: 5.446s
  