import sys
input = sys.stdin.readline

N, C = map(int, input().split())
arr = [0] * (C + 1)

for _ in range(N):
    t = int(input())
    c = t
    arr[c] = 1

    while True:
        c += t
        if c > C:
            break
        arr[c] = 1

print(arr.count(1))