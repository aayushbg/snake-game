// Returns a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Checks if two positions are equal
function positionsEqual(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}