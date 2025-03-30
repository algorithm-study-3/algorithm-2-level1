T = int(input())

for t in range(1, T + 1):
    print(f"Scenario #{t}:")

    m = int(input())
    sentences = []
    for _ in range(m):
        sentences.append(input())

    n = int(input())
    for _ in range(n):
        cnt = list(map(int, input().split()))[1:]
        str = ""
        for c in cnt:
            str += sentences[c]
        print(str)
    print()