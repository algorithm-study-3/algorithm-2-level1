name = input()
N = int(input())
probability = {}

for _ in range(N):
    t = input()
    L = name.count('L') + t.count('L')
    O = name.count('O') + t.count('O')
    V = name.count('V') + t.count('V')
    E = name.count('E') + t.count('E')

    probability[t] = (((L+O) * (L+V) * (L+E) * (O+V) * (O+E) * (V+E)) % 100)

mx = max(probability.values())
teams = [t for t, p in probability.items() if probability[t] == mx]
print(sorted(teams)[0])