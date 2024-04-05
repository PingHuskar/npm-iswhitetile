const iw = require('./index');

test(`iswhite`,() => {
    expect(iw.IsWhite("a1")).toBe(false);
    expect(iw.IsWhite("a2")).toBe(true);
    expect(iw.IsWhite("a3")).toBe(false);
    expect(iw.IsWhite("a4")).toBe(true);
    expect(iw.IsWhite("a5")).toBe(false);
    expect(iw.IsWhite("a6")).toBe(true);
    expect(iw.IsWhite("a7")).toBe(false);
    expect(iw.IsWhite("a8")).toBe(true);
    expect(iw.IsWhite("b1")).toBe(true);
    expect(iw.IsWhite("b2")).toBe(false);
    expect(iw.IsWhite("b3")).toBe(true);
    expect(iw.IsWhite("b4")).toBe(false);
    expect(iw.IsWhite("b5")).toBe(true);
    expect(iw.IsWhite("b6")).toBe(false);
    expect(iw.IsWhite("b7")).toBe(true);
    expect(iw.IsWhite("b8")).toBe(false);
    expect(iw.IsWhite("c1")).toBe(false);
    expect(iw.IsWhite("c2")).toBe(true);
    expect(iw.IsWhite("c3")).toBe(false);
    expect(iw.IsWhite("c4")).toBe(true);
    expect(iw.IsWhite("c5")).toBe(false);
    expect(iw.IsWhite("c6")).toBe(true);
    expect(iw.IsWhite("c7")).toBe(false);
    expect(iw.IsWhite("c8")).toBe(true);
    expect(iw.IsWhite("d1")).toBe(true);
    expect(iw.IsWhite("d2")).toBe(false);
    expect(iw.IsWhite("d3")).toBe(true);
    expect(iw.IsWhite("d4")).toBe(false);
    expect(iw.IsWhite("d5")).toBe(true);
    expect(iw.IsWhite("d6")).toBe(false);
    expect(iw.IsWhite("d7")).toBe(true);
    expect(iw.IsWhite("d8")).toBe(false);
    expect(iw.IsWhite("e1")).toBe(false);
    expect(iw.IsWhite("e2")).toBe(true);
    expect(iw.IsWhite("e3")).toBe(false);
    expect(iw.IsWhite("e4")).toBe(true);
    expect(iw.IsWhite("e5")).toBe(false);
    expect(iw.IsWhite("e6")).toBe(true);
    expect(iw.IsWhite("e7")).toBe(false);
    expect(iw.IsWhite("e8")).toBe(true);
    expect(iw.IsWhite("f1")).toBe(true);
    expect(iw.IsWhite("f2")).toBe(false);
    expect(iw.IsWhite("f3")).toBe(true);
    expect(iw.IsWhite("f4")).toBe(false);
    expect(iw.IsWhite("f5")).toBe(true);
    expect(iw.IsWhite("f6")).toBe(false);
    expect(iw.IsWhite("f7")).toBe(true);
    expect(iw.IsWhite("f8")).toBe(false);
    expect(iw.IsWhite("g1")).toBe(false);
    expect(iw.IsWhite("g2")).toBe(true);
    expect(iw.IsWhite("g3")).toBe(false);
    expect(iw.IsWhite("g4")).toBe(true);
    expect(iw.IsWhite("g5")).toBe(false);
    expect(iw.IsWhite("g6")).toBe(true);
    expect(iw.IsWhite("g7")).toBe(false);
    expect(iw.IsWhite("g8")).toBe(true);
    expect(iw.IsWhite("h1")).toBe(true);
    expect(iw.IsWhite("h2")).toBe(false);
    expect(iw.IsWhite("h3")).toBe(true);
    expect(iw.IsWhite("h4")).toBe(false);
    expect(iw.IsWhite("h5")).toBe(true);
    expect(iw.IsWhite("h6")).toBe(false);
    expect(iw.IsWhite("h7")).toBe(true);
    expect(iw.IsWhite("h8")).toBe(false);
    expect(iw.IsWhite("w-10")).toBe(undefined);
    expect(iw.IsWhite("m-9")).toBe(undefined);
    expect(iw.IsWhite("n-7")).toBe(undefined);
    expect(iw.IsWhite("p-1")).toBe(undefined);
    expect(iw.IsWhite("o-4")).toBe(undefined);
    expect(iw.IsWhite("p-9")).toBe(undefined);
    expect(iw.IsWhite("z0")).toBe(undefined);
    expect(iw.IsWhite("n-2")).toBe(undefined);
    expect(iw.IsWhite("j-1")).toBe(undefined);
    expect(iw.IsWhite("n-8")).toBe(undefined);
    expect(iw.IsWhite("u17")).toBe(undefined);
    expect(iw.IsWhite("p9")).toBe(undefined);
    expect(iw.IsWhite("k13")).toBe(undefined);
    expect(iw.IsWhite("y13")).toBe(undefined);
    expect(iw.IsWhite("j9")).toBe(undefined);
    expect(iw.IsWhite("y9")).toBe(undefined);
    expect(iw.IsWhite("p10")).toBe(undefined);
    expect(iw.IsWhite("k17")).toBe(undefined);
    expect(iw.IsWhite("m17")).toBe(undefined);
    expect(iw.IsWhite("n9")).toBe(undefined);
})