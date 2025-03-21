function solution(phone_book) {
  var answer = true;

  phone_book.sort();
  for (let i = 1; i < phone_book.length; i++) {
    if (phone_book[i].startsWith(phone_book[i - 1])) return false;
  }

  return true;
}
