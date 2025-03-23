# algorithm_js

# 📝 알고리즘 문제 풀이 - 2025-03-23

## 문제 📖

- **문제 링크:** [리트코드 - 150. Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/description/)

- **문제 유형:** stack

- **난이도:** medium

- **풀이 시간:** ⏳ 20분 

## ✍ 접근 방식

- 후위 표기식을 stack로 구현하기
- number는 다 stack에 담기
- 연산자를 발견하면 stack에서 숫자 2개를 꺼내서 계산, 이때 밑에 있던 숫자가 먼저 와야됨, 계산한 숫자를 다시 stack에 넣음
- 마지막으로 stack에 남아있는 숫자가 최종 결과 