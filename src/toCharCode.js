export default (tile) => {
    try {
        return [
            tile.slice(0, 1).toLowerCase().charCodeAt(),
            tile.slice(1, 2).charCodeAt(),
        ];
    } catch {
        return undefined
    }
};