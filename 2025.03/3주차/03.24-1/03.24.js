function solution(name, yearning, photo) {
  let i = 0;
  const match = name.reduce((acc, cur) => {
    acc[cur] = yearning[i++];
    return acc;
  }, {});
  const result = photo.map((names) => {
    return names.reduce((acc, cur) => {
      acc += match[cur] ?? 0;
      return acc;
    }, 0);
  });
  return result;
}
