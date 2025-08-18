import RandomTile from "./RandomTile"

export default (length) => {
    if (length > 64) return [];

    let arr = [...Array(length).fill(0).map(() => RandomTile())]
    arr = [...new Set(arr)];
    while (arr.length !== length) {
        arr.push(RandomTile())
        arr = [...new Set(arr)];
    }

    return arr;
}

