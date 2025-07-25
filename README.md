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
- Use native img tag with object-fit for better performance

## Why use img tag instead of background image?

Using the native img tag with object-fit provides better performance and accessibility. It also avoids potential issues with background image layering and provides native image attributes like alt text for better SEO and accessibility.


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
        isLazyLoaderVisible
    />;
};

export default Example;

```



There is also a example that you can play with it:

[![Play react-editext-example](https://raw.githubusercontent.com/acrool/acrool-react-img/main/play-in-example-button.svg)](https://acrool-react-img.pages.dev)


## License

MIT © [Acrool](https://github.com/acrool) & [Imagine](https://github.com/imagine10255)
