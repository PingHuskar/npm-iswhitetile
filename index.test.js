import { IsWhite, toIndex, toCharCode, IsCorner, LegalKnightMoves } from "./"
import files from "./src/files"
import ranks from "./src/ranks"
import knightMovesGrid from "./src/knightMovesGrid"

test(`IsWhite`, () => {
    expect(IsWhite("a1")).toBe(false);
    expect(IsWhite("a2")).toBe(true);
    expect(IsWhite("a3")).toBe(false);
    expect(IsWhite("a4")).toBe(true);
    expect(IsWhite("a5")).toBe(false);
    expect(IsWhite("a6")).toBe(true);
    expect(IsWhite("a7")).toBe(false);
    expect(IsWhite("a8")).toBe(true);
    expect(IsWhite("b1")).toBe(true);
    expect(IsWhite("b2")).toBe(false);
    expect(IsWhite("b3")).toBe(true);
    expect(IsWhite("b4")).toBe(false);
    expect(IsWhite("b5")).toBe(true);
    expect(IsWhite("b6")).toBe(false);
    expect(IsWhite("b7")).toBe(true);
    expect(IsWhite("b8")).toBe(false);
    expect(IsWhite("c1")).toBe(false);
    expect(IsWhite("c2")).toBe(true);
    expect(IsWhite("c3")).toBe(false);
    expect(IsWhite("c4")).toBe(true);
    expect(IsWhite("c5")).toBe(false);
    expect(IsWhite("c6")).toBe(true);
    expect(IsWhite("c7")).toBe(false);
    expect(IsWhite("c8")).toBe(true);
    expect(IsWhite("d1")).toBe(true);
    expect(IsWhite("d2")).toBe(false);
    expect(IsWhite("d3")).toBe(true);
    expect(IsWhite("d4")).toBe(false);
    expect(IsWhite("d5")).toBe(true);
    expect(IsWhite("d6")).toBe(false);
    expect(IsWhite("d7")).toBe(true);
    expect(IsWhite("d8")).toBe(false);
    expect(IsWhite("e1")).toBe(false);
    expect(IsWhite("e2")).toBe(true);
    expect(IsWhite("e3")).toBe(false);
    expect(IsWhite("e4")).toBe(true);
    expect(IsWhite("e5")).toBe(false);
    expect(IsWhite("e6")).toBe(true);
    expect(IsWhite("e7")).toBe(false);
    expect(IsWhite("e8")).toBe(true);
    expect(IsWhite("f1")).toBe(true);
    expect(IsWhite("f2")).toBe(false);
    expect(IsWhite("f3")).toBe(true);
    expect(IsWhite("f4")).toBe(false);
    expect(IsWhite("f5")).toBe(true);
    expect(IsWhite("f6")).toBe(false);
    expect(IsWhite("f7")).toBe(true);
    expect(IsWhite("f8")).toBe(false);
    expect(IsWhite("g1")).toBe(false);
    expect(IsWhite("g2")).toBe(true);
    expect(IsWhite("g3")).toBe(false);
    expect(IsWhite("g4")).toBe(true);
    expect(IsWhite("g5")).toBe(false);
    expect(IsWhite("g6")).toBe(true);
    expect(IsWhite("g7")).toBe(false);
    expect(IsWhite("g8")).toBe(true);
    expect(IsWhite("h1")).toBe(true);
    expect(IsWhite("h2")).toBe(false);
    expect(IsWhite("h3")).toBe(true);
    expect(IsWhite("h4")).toBe(false);
    expect(IsWhite("h5")).toBe(true);
    expect(IsWhite("h6")).toBe(false);
    expect(IsWhite("h7")).toBe(true);
    expect(IsWhite("h8")).toBe(false);
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

test("toIndex", () => {
    expect(toIndex("a5")).toStrictEqual([0, 4])
})

test("toCharCode", () => {
    expect(toCharCode("a5")).toStrictEqual([97, 53])
})

test("IsCorner", () => {
    expect(IsCorner("a1")).toBe(true)
    expect(IsCorner("a8")).toBe(true)
    expect(IsCorner("h8")).toBe(true)
    expect(IsCorner("h1")).toBe(true)
    expect(IsCorner("A1")).toBe(true)
    expect(IsCorner("A8")).toBe(true)
    expect(IsCorner("H8")).toBe(true)
    expect(IsCorner("H1")).toBe(true)
    expect(IsCorner("a5")).toBe(false)
})

test("LegalKnightMoves", () => {
    for (const rank of ranks) {
        for (const file of files) {
            const pos = file + rank;
            const [y, x] = toIndex(pos)
            expect(LegalKnightMoves(pos).length).toBe(knightMovesGrid[y][x])
        }
    }
}
)
