# algorithm_js

# 📝 알고리즘 문제 풀이 - 2025-03-13

## 문제 📖

-   **문제 링크:** [리트코드 - Valid Anagram](https://leetcode.com/problems/valid-anagram/description/)

-   **문제 유형:** `Hash Table`, `String`, `Sorting`

-   **난이도:** EASY

-   **풀이 시간:** ⏳ 25분 - 실제 걸렸던 시간

## ✍ 접근 방식

1. 문자열 s와 t를 배열로 만들어준 후 정렬을 해준다.
2. 둘 중에 더 긴 배열의 길이로 순회한다.
3. 순회하면서 서로의 같은 인덱스 순서에 해당되는 요소가 같은지 확인한다.
4. 확인 후 같지 않을 경우 `equal`를 false로 수정한다.
5. `equal`이 false일 경우 반복문을 종료시키고 `equal`를 반환한다.
