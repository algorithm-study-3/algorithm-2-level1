board = input()
ans = ''

count = 0
for i in range(len(board)):
    if board[i] == 'X':
        count += 1
    else:
        if count % 2 == 1:
            print(-1)
            exit(0)
        else:
            while count > 0:
                if count >= 4:
                    ans += 'AAAA'
                    count -= 4
                else:
                    ans += 'BB'
                    count -= 2
            ans += '.'

if count > 0:
    if count % 2 == 1:
            print(-1)
            exit(0)
    else:
        while count > 0:
            if count >= 4:
                ans += 'AAAA'
                count -= 4
            else:
                ans += 'BB'
                count -= 2
print(ans)