N, M = map(int, input().split())
f = [[] for _ in range(N + 1)]

for _ in range(M):
    f1, f2 = map(int, input().split())
    f[f1].append(f2)
    f[f2].append(f1)

for i in range(1, N + 1):
    print(len(f[i]))