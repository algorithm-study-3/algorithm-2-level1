var canConstruct = function (ransomNote, magazine) {
    let answer = true;
    const ransomNoteArr = ransomNote.split('');
    const magazineArr = magazine.split('');
    for (let i = 0; i < ransomNoteArr.length; i++) {
        const index = magazineArr.indexOf(ransomNoteArr[i]);
        if (index === -1) {
            answer = false;
            break;
        }
        magazineArr[index] = '';
    }

    return answer;
};

console.log(canConstruct('a', 'b'));
