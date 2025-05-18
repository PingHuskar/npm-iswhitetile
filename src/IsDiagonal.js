import IsValidTile from "./IsValidTile";
import toIndex from "./toIndex";

export default (tile1, tile2) => {
    if (!IsValidTile(tile1) || !IsValidTile(tile2)) return undefined;
    const [cx1, cy1] = toIndex(tile1);
    const [cx2, cy2] = toIndex(tile2);
    return Math.abs(cx1 - cx2) === Math.abs(cy1 - cy2);
}