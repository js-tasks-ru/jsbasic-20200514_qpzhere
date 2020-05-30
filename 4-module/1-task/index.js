/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let friendList = document.createElement('ul');
  for (let friend of friends) {
    friendList.innerHTML += `<li>${friend.firstName} ${friend.lastName}</li>`;
  }
  return friendList;
}
