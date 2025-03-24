function solution(schedules, timelogs, startday) {
  const result = timelogs.map((timelog, idx) => {
    const deadline = getDeadline(schedules[idx]);

    return timelog.every((time, dayIndex) => {
      if (!isWeekday(dayIndex, startday)) return true;
      return time <= deadline;
    });
  });

  return result.filter((v) => v).length;
}

function getDeadline(time) {
  let hour = Math.floor(time / 100);
  let min = (time % 100) + 10;

  if (min >= 60) {
    hour += 1;
    min -= 60;
  }

  return hour * 100 + min;
}

function isWeekday(dayIndex, startday) {
  const weekday = ((startday - 1 + dayIndex) % 7) + 1;
  return weekday >= 1 && weekday <= 5; // 월~금
}
