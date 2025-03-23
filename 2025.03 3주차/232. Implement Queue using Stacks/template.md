# algorithm_js

# 📝 알고리즘 문제 풀이 - 2025-03-23

## 문제 📖

- **문제 링크:** [리트코드 - 232. Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/description/)

- **문제 유형:** stack

- **난이도:** easy

- **풀이 시간:** ⏳ 20분 

## ✍ 접근 방식

- stack 2개로 FIFO 만들기
- stack 1개에 쌓을때는 먼저 들어간 것이 밑에 쌓임
- 가장 밑에 있는걸 다시 꺼낼려면? -> stack에 있는 요소들을 꺼내서 확인해야함
- 다른 스택에 차례대로 pop 해서 넣으면 제일 위에 먼저 들어간 요소가 있음 