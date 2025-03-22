num = 1

while True:
    n = int(input())
    if n == 0:
        exit(0)
    name = []
    for _ in range(n):
        name.append(input())
    count = [0] * n
    for _ in range(n * 2 - 1):
        girl = int(input().split()[0]) - 1
        count[girl] += 1
    idx = count.index(1)
    print(num, name[idx])
    num += 1