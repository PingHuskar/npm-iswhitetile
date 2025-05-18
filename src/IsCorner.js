import IsValidTile from "./IsValidTile";

export default (tile) => {
    if (!IsValidTile(tile)) return undefined;
    return /[ah][18]/i.test(tile);
}