# algorithm_js

# 📝 알고리즘 문제 풀이 - 2025-03-10

## 문제 📖

-   **문제 링크:** [leetcode - Valid Palindrome](https://leetcode.com/problems/valid-palindrome/description/)

-   **문제 유형:** `Two Pointers`, `String`

-   **난이도:** Easy

-   **풀이 시간:** ⏳ 10분 - 실제 걸렸던 시간

## ✍ 접근 방식

1. 먼저 알파벳, 숫자 이외에 문자를 모두 빈 문자열로 치환한 후 소문자로 변환한다.
2. 변환된 문자를 배열로 변환 후 거꾸로 뒤집고 다시 문자열로 만들어준다.
3. 서로 비교하여 같으면 true, 아니면 false를 반환한다.
