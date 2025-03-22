function solution(phone_book) {
    let answer = true;
    phone_book.sort();

    for (let i = 1; i < phone_book.length; i++) {
        if (phone_book[i].startsWith(phone_book[i - 1])) answer = false;
    }

    return answer;
}

console.log(solution(['119', '97674223', '1195524421']));
