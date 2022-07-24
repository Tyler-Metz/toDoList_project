function generateKey() {
    return Math.floor(Math.random() * 1000000);
}

let objectList = [
    {chore: 'bananas', key: generateKey()}
];

let newChore = 'mangos';
let newKey = generateKey();

objectList = [...objectList, {chore: newChore, key: newKey}];
objectList = [...objectList, {chore: newChore, key: newKey}];

console.log(objectList);

objectList = objectList.filter((val, ind) => val.key != newKey)

console.log("after filter: ", objectList);