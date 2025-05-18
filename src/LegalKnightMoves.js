import IsValidTile from "./IsValidTile";
import toCharCode from "./toCharCode";
import KnightMoves from "./KnightMoves";

export default (tile) => {
    if (!IsValidTile(tile)) return undefined
    const [f, r] = toCharCode(tile);
    const retArr = []
    const moves = KnightMoves(2, 1);
    for (const move of moves) {
        if (
            IsValidTile(
                `${String.fromCharCode(f + move[0])}${String.fromCharCode(r + move[1])
                }`
            )
        ) {
            retArr.push(
                `${String.fromCharCode(f + move[0])}${String.fromCharCode(r + move[1])
                }`
            );
        }
    }
    return retArr
}