function solution(babbling) {
    let answer = 0;
    const babyWord = ['aya', 'ye', 'woo', 'ma'];

    for (let x of babbling) {
        babyWord.forEach((word) => {
            x = x.replace(word, 'z');
        });

        if (x.replaceAll('z', '').length === 0) answer += 1;
    }

    return answer;
}

console.log(solution(['aya', 'yee', 'u', 'maa', 'wyeoo']));
