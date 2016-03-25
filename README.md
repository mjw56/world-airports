# world-airports

A lightweight JavaScript wrapper for the [World Airports API](https://market.mashape.com/nviror/world-aiports).

## Install

```bash
$ npm install world-airports --save
```

## Usage

```js
import { worldAirports } from 'world-airports';

worldAirports('lax').then(console.log);

/*
[
  {
    "ac": "LAX",
    "an": "Los Angeles",
    "cn": "United States",
    "cc": "US",
    "ct": "Los Angeles"
  },
  {
    "ac": "LLA",
    "an": "Kallax",
    "cn": "Sweden",
    "cc": "SE",
    "ct": "Lulea"
  }
]
*/
```

## LICENSE

MIT