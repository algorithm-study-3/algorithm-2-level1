function solution(n) {
    let num = n;
    let answer = 0;

    while (num > 0) {
        if (num % 2 !== 0) {
            num = parseInt(num / 2, 10);
            answer += 1;
        } else {
            num /= 2;
        }
    }

    return answer;
}

solution(5000);
