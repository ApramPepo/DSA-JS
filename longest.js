function longest(s) {
    let value = 0;
    const index = [1];

    for(let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            index.push(i);
        } else {
            index.pop();

            if (index.length === 0) {
                index.push(i);
            } else {
                const currentLength = i - index[index.length - 1];
                value = Math.max(value, currentLength);
            }
        }
    }

    return value;
}

console.log(longest("(()"));
console.log(longest(")("));
console.log(longest("(())("));
console.log(longest("()(())"));