# Acrool React Img

<a href="https://acrool-react-img.pages.dev/" title="Acrool React Img - Fast custom img for Reactjs">
    <img src="https://raw.githubusercontent.com/acrool/acrool-react-img/main/example/public/og.webp" alt="Acrool React Img Logo"/>
</a>

<p align="center">
    Fast custom img for Reactjs
</p>

<div align="center">

[![NPM](https://img.shields.io/npm/v/@acrool/react-img.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-img)
[![npm](https://img.shields.io/bundlejs/size/@acrool/react-img?style=for-the-badge)](https://github.com/acrool/@acrool/react-img/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/l/@acrool/react-img?style=for-the-badge)](https://github.com/acrool/react-img/blob/main/LICENSE)

[![npm downloads](https://img.shields.io/npm/dm/@acrool/react-img.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-img)
[![npm](https://img.shields.io/npm/dt/@acrool/react-img.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-img)

</div>


`^1.1.0 support react >=18.0.0 <20.0.0`

## Features

- Support width, height, aspect
- Support lazy load image
- Support mask animate

## Why is the background image placed in :after, the background color placed in :before, and the content requires position & zIndex?

If it is placed directly on itself, transparency 0 will be used during slow loading, which will cause all content to be hidden (such as background color, text content, reading bar). To avoid this problem, it must be layered.


## Install

```bash
yarn add @acrool/react-img
```

## Usage

add in your index.tsx
```tst
import "@acrool/react-img/dist/index.css";
```

then in your page
```tsx
import {Flex, fr, Grid} from '@acrool/react-grid';
import styled from 'styled-components';

import {Img} from '@acrool/react-img';
import {generatorArray} from '@acrool/js-utils/array';

const Example = () => {
    return <Img
        src="https://acrool-react-picker.pages.dev/sample/1.jpg"
        width={200}
        height={200}
        radius={8}
        isLazy
        isLazyMaskVisible
    />;
};

export default Example;

```



There is also a example that you can play with it:

[![Play react-editext-example](https://raw.githubusercontent.com/acrool/acrool-react-img/main/play-in-example-button.svg)](https://acrool-react-img.pages.dev)


## License

MIT © [Acrool](https://github.com/acrool) & [Imagine](https://github.com/imagine10255)
