// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

// 1. Prepends a cat to the beginning of the array (modifies original array)
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyAppendCat(name) {
    cats.push(name);
}

// 2. Removes the last cat from the array (modifies original array)
function destructivelyRemoveLastCat() {
    cats.pop();
}

// 3. Removes the first cat from the array (modifies original array)
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// 4. Appends a cat to the array and returns a new array (does NOT modify original)
function appendCat(name) {
    return [...cats, name];
}

// 5. Prepends a cat to the array and returns a new array (does NOT modify original)
function prependCat(name) {
    return [name, ...cats];
}

// 6. Removes the last cat and returns a new array (does NOT modify original)
function removeLastCat() {
    return cats.slice(0, -1);
}

// 7. Removes the first cat and returns a new array (does NOT modify original)
function removeFirstCat() {
    return cats.slice(1);
}
