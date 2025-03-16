N = int(input())
vote = []
ans = 0

for _ in range(N):
    vote.append(int(input()))

while True:
    idx = vote.index(max(vote))
    mx = [i for i, v in enumerate(vote) if v == max(vote)]
    if idx == 0 and len(mx) == 1:
        print(ans)
        exit(0)
    elif idx == 0:
        vote[mx[1]] -= 1
    else:
        vote[idx] -= 1
    vote[0] += 1
    ans += 1