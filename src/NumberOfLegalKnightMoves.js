import LegalKnightMoves from "./LegalKnightMoves"
import IsValidTile from "./IsValidTile";
export default (tile) => {
    if (!IsValidTile(tile)) return undefined
    return LegalKnightMoves(tile).length
}