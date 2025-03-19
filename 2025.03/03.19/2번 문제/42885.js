function solution(people, limit) {
    let answer = 0;
    let index = 0;
    let lastIndex = sortPeople.length - 1;
    const sortPeople = people.sort((a, b) => b - a);
    while (lastIndex >= index) {
        if (sortPeople[index] + sortPeople[lastIndex] <= limit) {
            lastIndex -= 1;
        }
        index += 1;
        answer += 1;
    }

    return answer;
}

solution([70, 50, 80, 50], 100);
