# algorithm_js

# 📝 알고리즘 문제 풀이 - 2025-04-03

## 문제 📖

- **문제 링크:** [리트코드 - 278. First Bad Version](https://leetcode.com/problems/first-bad-version/description/)

- **문제 유형:** Binary Search

- **난이도:** easy

- **풀이 시간:** ⏳ 10분

## ✍ 접근 방식

- 어떤 지점이 불량이면 그 이후의 것들도 모두 불량 
- 정상(false) -> 불량(ture)이 되는 지점을 찾아야함
- 중간이 정상이라면 그 이전도 정상 , left포인터를 중간 이후로 옮김
- 중간이 불량이라면 그 이전에도 불량이 있는지 찾아야함, right포인터를 중간으로 옮김 
