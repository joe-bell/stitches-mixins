# Stitches Mixins

> 🥣 Sass-style shorthand helpers for [Stitches][stitches]

<a href="https://www.npmjs.com/package/stitches-mixins">
  <img alt="NPM Version" src="https://badgen.net/npm/v/stitches-mixins" />
</a>
<a href="https://badgen.net/npm/types/stitches-mixins">
  <img alt="Types Included" src="https://badgen.net/npm/types/stitches-mixins" />
</a>
<a href="https://badgen.net/github/license/joe-bell/stitches-mixins">
  <img alt="Apache-2.0 License" src="https://badgen.net/github/license/joe-bell/stitches-mixins" />
</a>
<a href="https://www.npmjs.com/package/stitches-mixins">
  <img alt="NPM Downloads" src="https://badgen.net/npm/dm/stitches-mixins" />
</a>
<a href="https://twitter.com/joe_bell">
  <img alt="Follow @joebell_ on Twitter" src="https://img.shields.io/twitter/follow/joebell_.svg?style=social&label=Follow" />
</a>

## Table of Contents

1. [Setup](#setup)
2. [Usage](#usage)

## Setup

```tsx
// stitches.config.ts
import { createCss } from "@stitches/react";
import { mixins } from "stitches-mixins";

export const { css, styled } = createCss({
  theme: {},
  utils: {
    // with custom mixins
    "@include": mixins({
      orchidShadow: {
        boxShadow: "0 25px 50px -12px orchid",
      },
    }),
    // …or without
    "@include": mixins(),
  },
});
```

## Usage

```tsx
const Card = styled("div", {
  "@include": ["box", "orchidShadow"],
  // ...styles
});
```

### Multiple

```tsx
const SkipLink = styled("a", {
  "@include": ["box", "screenReaderOnly"],
  "&:focus": {
    "@include": "notScreenReaderOnly",
  },
  // ...styles
});
```

[stitches]: https://github.com/modulz/stitches
