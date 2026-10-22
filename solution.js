
//Problem 1: Staircase
var staircase = function (n) {
    const rows = [];
    for (let i = 1; i <= n; i++) {
        const spaces = ' '.repeat(n - i);
        const hashes = '#'.repeat(i);
        rows.push(spaces + hashes);
    }
    return rows.join('\n');
};

console.log(staircase(4));