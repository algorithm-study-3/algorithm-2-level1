# algorithm_js

# 📝 알고리즘 문제 풀이 - 2025-03-09

## 문제 📖

- **문제 링크:** [리트코드 - 206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/description/)

- **문제 유형:** Linked List

- **난이도:** easy

- **풀이 시간:** ⏳ 30분분

## ✍ 접근 방식

- 배열에 순서대로 저장하고 revese() 시킨뒤 다시 연결 -> 시간이 너무 많이 걸림
- 처음에 prev 변수를 만들고 head가 이걸 참조, prev와 cur을 한칸씩 이동하면서 참조 변경 
