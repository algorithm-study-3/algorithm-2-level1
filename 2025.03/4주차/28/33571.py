one_hole = ['A', 'a', 'b', 'D', 'd', 'e', 'g', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', '@']
two_hole = ['B']

str = input()
ans = 0

for s in str:
    if s in one_hole:
        ans += 1
    elif s in two_hole:
        ans += 2

print(ans)