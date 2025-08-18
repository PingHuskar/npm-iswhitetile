export default function unique(arr) {
    return new Array(...new Set(arr));
}