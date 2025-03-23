function solution(schedules, timelogs, startday) {
    let answer = 0;
    for (let i = 0; i < schedules.length; i++) {
        let today = startday % 7;
        let lateTime = 0;
        let hopeHour = parseInt(schedules[i] / 100, 10);
        let hopeTime = (schedules[i] % 100) + 10;
        if (hopeTime >= 60) {
            hopeHour += 1;
            hopeTime %= 60;
        }

        for (let j = 0; j < timelogs[i].length; j++) {
            const currentHour = parseInt(timelogs[i][j] / 100, 10);
            const currentTime = timelogs[i][j] % 100;
            if (today != 6 && today != 0) {
                if (currentHour > hopeHour) {
                    lateTime += 1;
                } else if (currentHour == hopeHour && currentTime > hopeTime) {
                    lateTime += 1;
                }
            }

            today += 1;
            today %= 7;
        }

        answer += lateTime > 0 ? 0 : 1;
    }

    return answer;
}
