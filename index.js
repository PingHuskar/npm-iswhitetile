const file = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`];
const rank = [`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`];

const validCoor = /^[a-h][1-8]$/i

const toIndex = (tile) => {
    return [
      file.indexOf(tile.slice(0, 1).toLowerCase()),
      rank.indexOf(tile.slice(1, 2)),
    ];
}

const toCharCode = (tile) => {
  return [
    tile.slice(0, 1).toLowerCase().charCodeAt(),
    tile.slice(1, 2).charCodeAt(),
  ];
};

const IsValidTile = (tile) => {
    if (!validCoor.test(tile)) return false;
    const [f, r] = toCharCode(tile);
    return (f >= 97) & (f <= 104) && (r >= 49) & (r <= 56);
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

const KnightMoves = (dx, dy) => {
    return [
      [dx, dy],
      [dx, -dy],
      [-dx, dy],
      [-dx, -dy],
      [dy, dx],
      [dy, -dx],
      [-dy, dx],
      [-dy, -dx],
    ];
}

const LegalKnightMoves = (tile) => {
    const validtile = IsValidTile(tile);
    if (!validtile) return undefined
    const [f, r] = toCharCode(tile);
    const retArr = []
    const moves = KnightMoves(2,1);
    for (const move of moves) {
        if (
          IsValidTile(
            `${String.fromCharCode(f + move[0])}${
              String.fromCharCode(r + move[1]) 
            }`
          )
        ) {
          retArr.push(
            `${String.fromCharCode(f + move[0])}${
              String.fromCharCode(r + move[1])
            }`
          );
        }
    }
    return retArr
}

const IsCorner = (tile) => {
    if (!validCoor.test(tile)) return undefined;
    return LegalKnightMoves(tile).length === 2;
}

module.exports = {
  validCoor,
  toIndex,
  toCharCode,
  IsValidTile,
  IsDiagonal,
  IsWhite,
  IsBlack,
  KnightMoves,
  LegalKnightMoves,
  IsCorner,
};
