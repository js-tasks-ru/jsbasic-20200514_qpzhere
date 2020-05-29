/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let userNameArr = new Array(users.length);
    for (let i = 0; i < userNameArr.length; i++) {
      userNameArr[i] = users[i].name;
    }
    return userNameArr;
}
