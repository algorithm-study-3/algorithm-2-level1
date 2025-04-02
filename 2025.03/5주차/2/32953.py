N, M = map(int, input().split())
students = {}

for _ in range(N):
    k = int(input())
    nums = list(input().split())
    for n in nums:
        if n in students.keys():
            students[n] += 1
        else:
            students[n] = 1

s = [k for k, v in students.items() if students[k] >= M]
print(len(s))