N, M, L = map(int, input().split())
ans = 0
p = [0] * (N + 1)
p[1] = 1
current = 1

while True:
    if p[current] == M:
        print(ans)
        exit(0)
    ans += 1
    if p[current] % 2 == 1:
        next = current + L
        if next > N:
            next %= N
    else:
        next = current - L
        if next < 1:
            next += N
    p[next] += 1
    current = next