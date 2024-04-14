// Non-curried function
function add(x, y) {
    return x + y;
  }
  
  console.log(add(2, 3)); // Outputs: 5
  
  // Curried function
  function curryAdd(x) {
    return function(y) {
      return x + y;
    };
  }
  
  const add2 = curryAdd(2); // This returns a function that expects the second argument
  
  console.log(add2(3)); // Outputs: 5