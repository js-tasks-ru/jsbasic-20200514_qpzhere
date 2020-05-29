/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  str = str.split(' ')
  .join(',')
  .split(',')
  .map(item => parseFloat(item))
  .filter(item => isNaN(item) !== true)
  .sort( (a, b) => a - b )

  let result = {
    min: str[0],
    max: str[str.length - 1],
  }
  return result;
}
