day = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

while True:
    d, m, y = map(int, input().split())
    ans = 0
    if d == m == y == 0:
        exit(0)

    for i in range(1, m):
        if i == 2 and (y % 4 == 0 and y % 100 != 0 or y % 400 == 0):
            ans += 29
        else:
            ans += day[i]

    ans += d
    print(ans)