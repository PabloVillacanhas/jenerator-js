# jenerator-js

[![Build Status](https://app.travis-ci.com/PabloVillacanhas/jenerator-js.svg?branch=main)](https://app.travis-ci.com/PabloVillacanhas/jenerator-js)
[![Coverage Status](https://coveralls.io/repos/github/PabloVillacanhas/jenerator-js/badge.svg?branch=main)](https://coveralls.io/github/PabloVillacanhas/jenerator-js?branch=main)

Creates random instances of objects.

Minimum and easy library to generate instances of objects in javascript.
No dependencies. All

- Supports the generation of objects with numeric and string values.
- Supports the generation of constant fields.
- Supportsd the random pick between a set of different items with `randomFrom`.

As simple as:

```
MockBuilder(10, {
    id: id(),
    a: randomNumber(0, 10000),
    b: {
      c: randomNumber(0, 300),
      d: randomString()
    },
    e: 4,
    f: null,
    g: randomFrom(["u", 6, "juja"])
  });
```

See working example in [Codesandbox](https://codesandbox.io/s/jeneratorjs-demo-lryf2d?file=/src/useRandomizer.tsx)

For a more powerful library you can take a look into [falso](https://www.npmjs.com/package/@ngneat/falso)
