ignore = ['i', 'pa', 'te', 'ni', 'niti', 'a', 'ali', 'nego', 'no', 'ili']

sentence = input().split()
ans = ''

for i in range(len(sentence)):
    if sentence[i] in ignore:
        if i == 0:
            ans += sentence[i][0].upper()
    else:
        ans += sentence[i][0].upper()

print(ans)