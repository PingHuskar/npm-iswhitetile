import file from "./file";
import rank from "./rank";

export default (tile) => {
    try {
        return [
            file.indexOf(tile.slice(0, 1).toLowerCase()),
            rank.indexOf(tile.slice(1, 2)),
        ];
    } catch {
        return undefined
    }
}