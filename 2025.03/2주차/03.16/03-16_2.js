function solution(num_list) {
  const multi = num_list.reduce((acc, cur) => acc * cur, 1);
  const addMulti = num_list.reduce((acc, cur) => acc + cur, 0);

  return multi < addMulti * addMulti ? 1 : 0;
}
