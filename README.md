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

## Features

- Support width, height, aspect
- Support round
- Support text mock width

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

const LotteryDrawCardImg = () => {
    return <LotteryDrawCardImgRoot>
        <Flex className="justify-content-between gap-4">
            <Img text="Next draw : 2024/09/01 13:02:53"/>
            <Img text="Last bet In: 0 Day 00:00:00"/>
        </Flex>

        <Title>
            <Img text="GUESS THE LAST DIGIT OF THE FIRST PRIZE"/>
        </Title>

        <Grid col={fr(3)} className="gx-2">
            {generatorArray(3)
                .map((key) => {
                    return <Flex col="column" className="gap-2" key={key}>
                        <Img h={110}/>
                        <Img round w={46} className="mx-auto"/>
                        <Img text="#2412394" className="mx-auto"/>
                    </Flex>;
                })}
        </Grid>
    </LotteryDrawCardImgRoot>;
};

export default LotteryDrawCardImg;


const Title = styled.div`
    font-size: 15px;
    padding: 10px;
`;

const LotteryDrawCardImgRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(133, 133, 133, .2);
  padding: 10px;
  font-size: 12px;
`;

```




## Options

if need use `null` value, options type

```json
{
    "compilerOptions": {
        "strictNullChecks": false
    }
}
```

There is also a example that you can play with it:

[![Play react-editext-example](https://raw.githubusercontent.com/acrool/acrool-react-img/main/play-in-example-button.svg)](https://acrool-react-img.pages.dev)


## License

MIT © [imagine10255](https://github.com/imagine10255)
