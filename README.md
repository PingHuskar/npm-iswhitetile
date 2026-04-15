# iswhitetile

A utility library for chess tile operations. Supports tile color detection, diagonal checks, knight move generation, corner detection, and more.

## Installation

```bash
npm install iswhitetile
```

## Usage

```js
import { IsWhite, IsBlack, KnightMoves, LegalKnightMoves } from 'iswhitetile';
```

## API

Tiles are represented as standard chess algebraic notation strings (e.g. `"a1"`, `"e4"`). Files are `a`–`h` and ranks are `1`–`8`.

All functions return `undefined` if given an invalid tile.

---

### `IsValidTile(coor: string): boolean | undefined`

Returns `true` if the coordinate is a valid chess tile.

```js
IsValidTile('e4') // true
IsValidTile('z9') // undefined
```

---

### `IsWhite(coor: string): boolean | undefined`

Returns `true` if the tile is a white square.

```js
IsWhite('a1') // false
IsWhite('b1') // true
```

---

### `IsBlack(coor: string): boolean | undefined`

Returns `true` if the tile is a black square.

```js
IsBlack('a1') // true
IsBlack('b1') // false
```

---

### `IsDiagonal(from: string, to: string): boolean | undefined`

Returns `true` if the two tiles are on the same diagonal.

```js
IsDiagonal('a1', 'h8') // true
IsDiagonal('a1', 'a8') // false
```

---

### `IsCorner(coor: string): boolean | undefined`

Returns `true` if the tile is one of the four corner squares (`a1`, `a8`, `h1`, `h8`).

```js
IsCorner('a1') // true
IsCorner('e4') // false
```

---

### `LegalKnightMoves(coor: string): string[] | undefined`

Returns an array of valid destination tiles a knight can legally move to from the given tile.

```js
LegalKnightMoves('a1') // ['b3', 'c2']
LegalKnightMoves('e4') // ['d6', 'f6', 'c5', 'g5', 'c3', 'g3', 'd2', 'f2']
```

---

### `NumberOfLegalKnightMoves(coor: string): number | undefined`

Returns the count of legal knight moves from the given tile.

```js
NumberOfLegalKnightMoves('a1') // 2
NumberOfLegalKnightMoves('e4') // 8
```

---

### `KnightMoves(dx: number, dy: number): [number, number][]`

Returns all 8 relative knight move offsets for the given step sizes.

```js
KnightMoves(2, 1)
// [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]]
```

---

### `knightMovesGrid`

A pre-computed 8×8 grid where each cell contains the number of legal knight moves from that square.

```js
import { knightMovesGrid } from 'iswhitetile';
// knightMovesGrid[0][0] === 2  (a1)
// knightMovesGrid[3][3] === 8  (d4)
```

---

### `toIndex(coor: string): [number, number] | undefined`

Converts a tile string to a `[fileIndex, rankIndex]` tuple (0-based).

```js
toIndex('a1') // [0, 0]
toIndex('h8') // [7, 7]
```

---

### `toCharCode(coor: string): [number, number] | undefined`

Converts a tile string to a `[fileCharCode, rankCharCode]` tuple.

```js
toCharCode('a1') // [97, 49]
```

---

### `validateCoor: RegExp`

A regular expression that matches valid chess tile coordinates.

```js
validateCoor.test('e4') // true
validateCoor.test('z9') // false
```

---

### `RandomTile(): string`

Returns a random valid chess tile.

```js
RandomTile() // e.g. 'f3'
```

---

### `RandomTiles(length: number): string[]`

Returns an array of `length` random valid chess tiles.

```js
RandomTiles(3) // e.g. ['a2', 'h7', 'c5']
```

---

## License

MIT
