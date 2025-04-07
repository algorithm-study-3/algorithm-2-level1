function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        answer += 1;

        const convertAnswer = String(answer).split('');
        const index = convertAnswer.indexOf('3');
        if (index > -1) {
            if ((convertAnswer.length === 2 && index === 0) || (convertAnswer.length === 3 && index === 1)) {
                answer += 10;
            } else {
                answer += 1;
            }
        }

        if (answer % 3 === 0) {
            answer += 1;
        }

        const convertAnswer1 = String(answer).split('');
        const index1 = convertAnswer1.indexOf('3');
        if (index1 > -1) {
            if ((convertAnswer1.length === 2 && index1 === 0) || (convertAnswer.length === 3 && index === 1)) {
                answer += 10;
            } else {
                answer += 1;
            }
        }
    }
    return answer;
}
