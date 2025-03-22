N = input()

for i in range(1, len(N)):
    n1 = list(map(int, N[:i]))
    n2 = list(map(int, N[i:]))

    m1 = 1
    m2 = 1

    for j in range(len(n1)):
        m1 *= n1[j]
    for j in range(len(n2)):
        m2 *= n2[j]

    if m1 == m2:
        print('YES')
        exit(0)
print('NO')