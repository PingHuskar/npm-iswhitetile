import files from "./files";
import ranks from "./ranks";

export default () => {
    const file = files[Math.floor(Math.random() * files.length)];
    const rank = ranks[Math.floor(Math.random() * ranks.length)];
    return file + rank
}