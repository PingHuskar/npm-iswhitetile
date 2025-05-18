import validateCoor from "./validateCoor";
import toCharCode from "./toCharCode";

export default (tile) => {
    if (!validateCoor.test(tile)) return undefined;
    const [f, r] = toCharCode(tile);
    return (f >= 97) & (f <= 104) && (r >= 49) & (r <= 56);
}