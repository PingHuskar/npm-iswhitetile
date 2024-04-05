const file = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`];
const rank = [`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`];

const validCoor = /^[a-h][1-8]$/i

const toIndex = (tile) => {
    return [
      file.indexOf(tile.slice(0, 1).toLowerCase()),
      rank.indexOf(tile.slice(1, 2)),
    ];
}

const IsWhite = (tile) => {
    if (!validCoor.test(tile)) return undefined;
    const [f, r] = toIndex(tile);
    return (f + r) % 2 ? true : false;
};

const IsBlack = (tile) => {
    if (!validCoor.test(tile)) return undefined;
    const [f, r] = toIndex(tile);
    return (f + r) % 2 ? false : true;
}

const IsDiagonal = (tile1, tile2) => {
    if (!validCoor.test(tile1) || !validCoor.test(tile2)) return undefined;
    const [cx1, cy1] = toIndex(tile1);
    const [cx2, cy2] = toIndex(tile2);
    return Math.abs(cx1 - cx2) == Math.abs(cy1 - cy2);
}

module.exports = {
    validCoor,
    toIndex,
    IsDiagonal,
    IsWhite,
    IsBlack,
};
