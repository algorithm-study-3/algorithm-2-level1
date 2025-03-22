# algorithm_js

# 📝 알고리즘 문제 풀이 - 2025-03-22

## 문제 📖

-   **문제 링크:** [리트코드 - Ransom Note](https://leetcode.com/problems/ransom-note/description/)

-   **문제 유형:** `String`

-   **난이도:** Easy

-   **풀이 시간:** ⏳ 30분 - 실제 걸렸던 시간

## ✍ 접근 방식

1. ransomNote와 magazine을 둘다 배열로 만들어 준다.
2. ransomNoteArr 배열 길이만큼 반복한다.
3. 해당 요소가 있는지 확인한다.
4. 없을 경우 정답을 false로 변환한 뒤 반복문을 종료한다.
5. 있을 경우 해당 요소를 찾아 빈 문자열로 변환한다.
6. 반복문이 종료되면 정답을 반환한다.
