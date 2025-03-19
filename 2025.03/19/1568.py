N = int(input())
ans = 0
bird = 1

while N > 0:
    if N < bird:
        bird = 1
    N -= bird
    bird += 1
    ans += 1

print(ans)