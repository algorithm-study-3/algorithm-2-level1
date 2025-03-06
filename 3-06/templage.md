# algorithm_js

# 📝 알고리즘 문제 풀이 - 2025-03-06

## 문제 📖

- **문제 링크:** [리트코드 - 21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

- **문제 유형:** Linked List

- **난이도:** easy

- **풀이 시간:** ⏳ 40분

## ✍ 접근 방식



1.
- current 포인터를 만들고 접근해서 얻은 val로 새 node를 생성하는 방식 -> 시간이 너무 오래 걸림


2. 
- 처음에 dummy node를 만들어서 dummy node의 next를 반환

- 새 node를 생성하지 않고 next에 존재한 노드 할당
