/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (n > 1) {
    for (i = n; i > 1; i--) {
      n = n * (i - 1);
    };
    return n;
  } else {
    return 1;
  };
};
