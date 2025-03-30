function solution(ineq, eq, n, m) {
  if (ineq === "<") {
    if (eq === "=") {
      return n <= m ? 1 : 0;
    }

    if (eq === "!") {
      return n < m ? 1 : 0;
    }
  }

  if (ineq === ">") {
    if (eq === "!") {
      return n > m ? 1 : 0;
    }

    if (eq === "=") {
      return n >= m ? 1 : 0;
    }
  }
}
