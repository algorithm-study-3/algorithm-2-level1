n = int(input())
num = list(map(int, input().split()))
ans = []

for i in range(1, min(num) + 1):
    cnt = 0
    for n in num:
        if n % i == 0:
            cnt += 1
    if cnt == len(num):
        ans.append(i)

print(*ans, sep="\n")