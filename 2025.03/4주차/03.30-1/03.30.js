function solution(n, m, section) {
  let a = section[0];
  let count = 1;

  if (section.length === 1) return 1;

  for (let i = 1; i < section.length; i++) {
    if (section[i] - a + 1 <= m) continue;
    count++;
    a = section[i];
  }
  console.log(count);
  return count;
}
