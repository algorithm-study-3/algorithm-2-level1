N = list(map(int, input().split()))
current = N[0]

for n in N:
    if current > n:
        print('Bad')
        exit(0)
    current = n
print('Good')