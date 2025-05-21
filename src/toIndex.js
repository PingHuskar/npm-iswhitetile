import files from "./files";
import ranks from "./ranks";

export default (tile) => {
    try {
        return [
            files.indexOf(tile.slice(0, 1).toLowerCase()),
            ranks.indexOf(tile.slice(1, 2)),
        ];
    } catch {
        return undefined
    }
}