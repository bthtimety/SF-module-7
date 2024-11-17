function remakeArray(arr) {
    return Array.from(new Set(arr)).sort((a, b) => a - b);
}

const numbers = [5, 3, 3, 4, 6, 5, 7, 1, 2, 8];
const remakeNumbers = remakeArray(numbers);

console.log(remakeNumbers);