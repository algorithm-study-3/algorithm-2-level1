N, M, K = map(int, input().split())
arr = [[0] * M for _ in range(N)]

for i in range(N):
    arr[i] = list(map(int, input().split()))

for j in range(1, M + 1):
    for i in range(N):
        s = sum(arr[i][:j])
        if s >= K:
            print(i + 1, j)
            exit(0)