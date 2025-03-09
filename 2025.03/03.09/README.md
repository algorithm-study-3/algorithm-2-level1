# algorithm_js

# 📝 알고리즘 문제 풀이 - 2025-03-09

## 문제 📖

-   **문제 링크:** [leetcode - Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)

-   **문제 유형:** `Array`, `Dynamic Programming`

-   **난이도:** Easy

-   **풀이 시간:** ⏳ 30분 - 실제 걸렸던 시간

## ✍ 접근 방식

최소값으로 구매한 다음 최댓값에 팔아 최대한의 이익을 남겨야한다.

1. 배열을 한 번씩 순회하면서 최소 구매 가격인지 확인한다.
2. 현재 배열의 인덱스 가격에서 최소 구매 가격을 뺀 가격이 기존 판매 금액보다 큰지 확인하고 클 경우 이익 가격을 수정한다.
3. 이익 가격을 반환한다.
