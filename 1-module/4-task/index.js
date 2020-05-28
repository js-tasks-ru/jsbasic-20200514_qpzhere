/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  str = str.toLowerCase();
  if (str.includes('xxx') || str.includes('1xbet')) {
    return true;
  } else {
    return false;
  };
}
