import { IsWhite, IsBlack, toIndex, toCharCode, IsCorner, NumberOfLegalKnightMoves } from "./"
import files from "./src/files"
import ranks from "./src/ranks"
import knightMovesGrid from "./src/knightMovesGrid"
import RandomTile from "./src/RandomTile"
import RandomTiles from "./src/RandomTiles"
import { IsValidTile } from "./src"

test(`IsWhite`, () => {
    expect(IsWhite("a1")).toBeFalsy();
    expect(IsWhite("a2")).toBeTruthy();
    expect(IsWhite("a3")).toBeFalsy();
    expect(IsWhite("a4")).toBeTruthy();
    expect(IsWhite("a5")).toBeFalsy();
    expect(IsWhite("a6")).toBeTruthy();
    expect(IsWhite("a7")).toBeFalsy();
    expect(IsWhite("a8")).toBeTruthy();
    expect(IsWhite("b1")).toBeTruthy();
    expect(IsWhite("b2")).toBeFalsy();
    expect(IsWhite("b3")).toBeTruthy();
    expect(IsWhite("b4")).toBeFalsy();
    expect(IsWhite("b5")).toBeTruthy();
    expect(IsWhite("b6")).toBeFalsy();
    expect(IsWhite("b7")).toBeTruthy();
    expect(IsWhite("b8")).toBeFalsy();
    expect(IsWhite("c1")).toBeFalsy();
    expect(IsWhite("c2")).toBeTruthy();
    expect(IsWhite("c3")).toBeFalsy();
    expect(IsWhite("c4")).toBeTruthy();
    expect(IsWhite("c5")).toBeFalsy();
    expect(IsWhite("c6")).toBeTruthy();
    expect(IsWhite("c7")).toBeFalsy();
    expect(IsWhite("c8")).toBeTruthy();
    expect(IsWhite("d1")).toBeTruthy();
    expect(IsWhite("d2")).toBeFalsy();
    expect(IsWhite("d3")).toBeTruthy();
    expect(IsWhite("d4")).toBeFalsy();
    expect(IsWhite("d5")).toBeTruthy();
    expect(IsWhite("d6")).toBeFalsy();
    expect(IsWhite("d7")).toBeTruthy();
    expect(IsWhite("d8")).toBeFalsy();
    expect(IsWhite("e1")).toBeFalsy();
    expect(IsWhite("e2")).toBeTruthy();
    expect(IsWhite("e3")).toBeFalsy();
    expect(IsWhite("e4")).toBeTruthy();
    expect(IsWhite("e5")).toBeFalsy();
    expect(IsWhite("e6")).toBeTruthy();
    expect(IsWhite("e7")).toBeFalsy();
    expect(IsWhite("e8")).toBeTruthy();
    expect(IsWhite("f1")).toBeTruthy();
    expect(IsWhite("f2")).toBeFalsy();
    expect(IsWhite("f3")).toBeTruthy();
    expect(IsWhite("f4")).toBeFalsy();
    expect(IsWhite("f5")).toBeTruthy();
    expect(IsWhite("f6")).toBeFalsy();
    expect(IsWhite("f7")).toBeTruthy();
    expect(IsWhite("f8")).toBeFalsy();
    expect(IsWhite("g1")).toBeFalsy();
    expect(IsWhite("g2")).toBeTruthy();
    expect(IsWhite("g3")).toBeFalsy();
    expect(IsWhite("g4")).toBeTruthy();
    expect(IsWhite("g5")).toBeFalsy();
    expect(IsWhite("g6")).toBeTruthy();
    expect(IsWhite("g7")).toBeFalsy();
    expect(IsWhite("g8")).toBeTruthy();
    expect(IsWhite("h1")).toBeTruthy();
    expect(IsWhite("h2")).toBeFalsy();
    expect(IsWhite("h3")).toBeTruthy();
    expect(IsWhite("h4")).toBeFalsy();
    expect(IsWhite("h5")).toBeTruthy();
    expect(IsWhite("h6")).toBeFalsy();
    expect(IsWhite("h7")).toBeTruthy();
    expect(IsWhite("h8")).toBeFalsy();
    expect(IsWhite("w-10")).toBe(undefined);
    expect(IsWhite("m-9")).toBe(undefined);
    expect(IsWhite("n-7")).toBe(undefined);
    expect(IsWhite("p-1")).toBe(undefined);
    expect(IsWhite("o-4")).toBe(undefined);
    expect(IsWhite("p-9")).toBe(undefined);
    expect(IsWhite("z0")).toBe(undefined);
    expect(IsWhite("n-2")).toBe(undefined);
    expect(IsWhite("j-1")).toBe(undefined);
    expect(IsWhite("n-8")).toBe(undefined);
    expect(IsWhite("u17")).toBe(undefined);
    expect(IsWhite("p9")).toBe(undefined);
    expect(IsWhite("k13")).toBe(undefined);
    expect(IsWhite("y13")).toBe(undefined);
    expect(IsWhite("j9")).toBe(undefined);
    expect(IsWhite("y9")).toBe(undefined);
    expect(IsWhite("p10")).toBe(undefined);
    expect(IsWhite("k17")).toBe(undefined);
    expect(IsWhite("m17")).toBe(undefined);
    expect(IsWhite("n9")).toBe(undefined);
})

test(`IsBlack`, () => {
    expect(IsBlack("a1")).toBeTruthy();
    expect(IsBlack("a2")).toBeFalsy();
    expect(IsBlack("a3")).toBeTruthy();
    expect(IsBlack("a4")).toBeFalsy();
    expect(IsBlack("a5")).toBeTruthy();
    expect(IsBlack("a6")).toBeFalsy();
    expect(IsBlack("a7")).toBeTruthy();
    expect(IsBlack("a8")).toBeFalsy();
    expect(IsBlack("b1")).toBeFalsy();
    expect(IsBlack("b2")).toBeTruthy();
    expect(IsBlack("b3")).toBeFalsy();
    expect(IsBlack("b4")).toBeTruthy();
    expect(IsBlack("b5")).toBeFalsy();
    expect(IsBlack("b6")).toBeTruthy();
    expect(IsBlack("b7")).toBeFalsy();
    expect(IsBlack("b8")).toBeTruthy();
    expect(IsBlack("c1")).toBeTruthy();
    expect(IsBlack("c2")).toBeFalsy();
    expect(IsBlack("c3")).toBeTruthy();
    expect(IsBlack("c4")).toBeFalsy();
    expect(IsBlack("c5")).toBeTruthy();
    expect(IsBlack("c6")).toBeFalsy();
    expect(IsBlack("c7")).toBeTruthy();
    expect(IsBlack("c8")).toBeFalsy();
    expect(IsBlack("d1")).toBeFalsy();
    expect(IsBlack("d2")).toBeTruthy();
    expect(IsBlack("d3")).toBeFalsy();
    expect(IsBlack("d4")).toBeTruthy();
    expect(IsBlack("d5")).toBeFalsy();
    expect(IsBlack("d6")).toBeTruthy();
    expect(IsBlack("d7")).toBeFalsy();
    expect(IsBlack("d8")).toBeTruthy();
    expect(IsBlack("e1")).toBeTruthy();
    expect(IsBlack("e2")).toBeFalsy();
    expect(IsBlack("e3")).toBeTruthy();
    expect(IsBlack("e4")).toBeFalsy();
    expect(IsBlack("e5")).toBeTruthy();
    expect(IsBlack("e6")).toBeFalsy();
    expect(IsBlack("e7")).toBeTruthy();
    expect(IsBlack("e8")).toBeFalsy();
    expect(IsBlack("f1")).toBeFalsy();
    expect(IsBlack("f2")).toBeTruthy();
    expect(IsBlack("f3")).toBeFalsy();
    expect(IsBlack("f4")).toBeTruthy();
    expect(IsBlack("f5")).toBeFalsy();
    expect(IsBlack("f6")).toBeTruthy();
    expect(IsBlack("f7")).toBeFalsy();
    expect(IsBlack("f8")).toBeTruthy();
    expect(IsBlack("g1")).toBeTruthy();
    expect(IsBlack("g2")).toBeFalsy();
    expect(IsBlack("g3")).toBeTruthy();
    expect(IsBlack("g4")).toBeFalsy();
    expect(IsBlack("g5")).toBeTruthy();
    expect(IsBlack("g6")).toBeFalsy();
    expect(IsBlack("g7")).toBeTruthy();
    expect(IsBlack("g8")).toBeFalsy();
    expect(IsBlack("h1")).toBeFalsy();
    expect(IsBlack("h2")).toBeTruthy();
    expect(IsBlack("h3")).toBeFalsy();
    expect(IsBlack("h4")).toBeTruthy();
    expect(IsBlack("h5")).toBeFalsy();
    expect(IsBlack("h6")).toBeTruthy();
    expect(IsBlack("h7")).toBeFalsy();
    expect(IsBlack("h8")).toBeTruthy();
    expect(IsBlack("w-10")).toBe(undefined);
    expect(IsBlack("m-9")).toBe(undefined);
    expect(IsBlack("n-7")).toBe(undefined);
    expect(IsBlack("p-1")).toBe(undefined);
    expect(IsBlack("o-4")).toBe(undefined);
    expect(IsBlack("p-9")).toBe(undefined);
    expect(IsBlack("z0")).toBe(undefined);
    expect(IsBlack("n-2")).toBe(undefined);
    expect(IsBlack("j-1")).toBe(undefined);
    expect(IsBlack("n-8")).toBe(undefined);
    expect(IsBlack("u17")).toBe(undefined);
    expect(IsBlack("p9")).toBe(undefined);
    expect(IsBlack("k13")).toBe(undefined);
    expect(IsBlack("y13")).toBe(undefined);
    expect(IsBlack("j9")).toBe(undefined);
    expect(IsBlack("y9")).toBe(undefined);
    expect(IsBlack("p10")).toBe(undefined);
    expect(IsBlack("k17")).toBe(undefined);
    expect(IsBlack("m17")).toBe(undefined);
    expect(IsBlack("n9")).toBe(undefined);
})

test("toIndex", () => {
    expect(toIndex("a5")).toStrictEqual([0, 4])
})

test("toCharCode", () => {
    expect(toCharCode("a5")).toStrictEqual([97, 53])
})

test("IsCorner", () => {
    ["a1", "a8", "h8", "h1", "A1", "A8", "H8", "H1"].forEach(t => expect(IsCorner(t)).toBeTruthy());
    expect(IsCorner("a5")).toBeFalsy();
})

test("NumberOfLegalKnightMoves", () => {
    for (const rank of ranks) {
        for (const file of files) {
            const pos = file + rank;
            const [y, x] = toIndex(pos)
            expect(NumberOfLegalKnightMoves(pos)).toBe(knightMovesGrid[y][x])
        }
    }
}
)

test("always random valid", () => {
    Array.from({ length: 500 }, () => expect(IsValidTile(RandomTile())).toBeTruthy());
})

test("always random unique with length", () => {
    Array.from({ length: ranks.length * files.length }, (_, i) => expect([...new Set(RandomTiles(i + 1))].length).toBe(i + 1));
})