import IsValidTile from "./IsValidTile";
import toIndex from "./toIndex";

export default (tile) => {
    if (!IsValidTile(tile)) return undefined;
    const [f, r] = toIndex(tile);
    return (f + r) % 2 ? true : false;
};