t1 = []
t2 = []

for _ in range(10):
    t1.append(int(input()))

for _ in range(10):
    t2.append(int(input()))

t1 = sorted(t1, reverse=True)
t2 = sorted(t2, reverse=True)

print(sum(t1[0:3]), sum(t2[0:3]))