# algorithm_js

# 📝 알고리즘 문제 풀이 - 2025-03-07

## 문제 📖

-   **문제 링크:** [leetcode - Valid Parentheses](https://leetcode.com/problems/valid-parentheses/description/)

-   **문제 유형:** `String`, `Stack`

-   **난이도:** Easy

-   **풀이 시간:** ⏳ 16분 - 실제 걸렸던 시간

## ✍ 접근 방식

1. 배열에 닫는 기호를 key, 여는 기호를 value로 선언한다.
2. 정답 배열을 배열로 초기화한다.
3. 문자열을 배열로 변환 후 순회하며 닫는 기호와 배열에 마지막 데이터를 비교한다.
   다만 배열의 길이가 1보다 커야한다.
   만약 위 2가지 조건에 부합할 경우 배열에 마지막 요소를 제거한다.
4. 위 조건에 부합하지않을 경우 정답 배열에 추가한다.
5. 배열의 길이가 0보다 클 경우 false, 0일 경우 true를 반환한다.
