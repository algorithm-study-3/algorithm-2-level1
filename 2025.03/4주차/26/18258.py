import sys
input = sys.stdin.readline
from collections import deque

N = int(input())
q = deque()

for _ in range(N):
    c = list(input().split())
    c1 = c[0]

    if c1 == 'push':
        q.append(int(c[1]))
    elif c1 == 'pop':
        if len(q) == 0:
            print(-1)
        else:
            print(q.popleft())
    elif c1 == 'size':
        print(len(q))
    elif c1 == 'empty':
        if len(q) == 0:
            print(1)
        else:
            print(0)
    elif c1 == 'front':
        if len(q) == 0:
            print(-1)
        else:
            print(q[0])
    elif c1 == 'back':
        if len(q) == 0:
            print(-1)
        else:
            print(q[-1])