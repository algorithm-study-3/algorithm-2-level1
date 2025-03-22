N = int(input())
trophy = []

for _ in range(N):
    trophy.append(int(input()))

# 왼쪽
ans = 1
mx = trophy[0]

for i in range(1, N):
    if mx < trophy[i]:
        mx = trophy[i]
        ans += 1

print(ans)

# 오른쪽
trophy = trophy[::-1]
ans = 1
mx = trophy[0]

for i in range(1, N):
    if mx < trophy[i]:
        mx = trophy[i]
        ans += 1

print(ans)