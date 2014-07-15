# helmholtz

Parsing notes written in
[Helmholtz pitch notation](http://en.wikipedia.org/wiki/Helmholtz_pitch_notation)
returning intervals in octaves and fifths relative to C0 (or `C,,`)

```js
var helmholtz = require('helmholtz');

helmholtz(',,C') //  -> [ 0, 0 ]
helmholtz('d#\'') // -> [ -1, 9 ]
helmholtz('a\'\') // -> [ 4, 3 ]
```

## usage

```js
var helmholtz = require('helmholtz');
```

### helmholtz(note)

Takes a `note` string in the Helmholtz notation and returns an array
describing the interval of that note relative to C0. The returned interval is
in the format `[octaves, fifths]` - that is, an array consisting of two
numbers, the first the number of octaves to jump, the second the number of
fifths to jump from C0 to land at the desired note.
