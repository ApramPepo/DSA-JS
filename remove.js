function remove(s){ 
    const stack = [];

    for(let char of s) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join('');
}

console.log(remove("lolllllll"));
console.log(remove("tree"));
console.log(remove("monday"));
console.log(remove("oh no, someone is about to fall"));