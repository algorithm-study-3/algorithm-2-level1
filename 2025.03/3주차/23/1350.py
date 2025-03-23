N = int(input())
file = list(map(int, input().split()))
c = int(input())
count = 0

for f in file:
    if f == 0:
        continue
    if f <= c:
        count += 1
    else:
        count += f // c
        if f % c != 0:
            count += 1

print(c * count)