import type {Meta, StoryObj} from '@storybook/react';

import {Img} from '@acrool/react-img';
import React from 'react';
import {Flex} from '@acrool/react-grid';
import {failImages, images} from './data';

const meta = {
    title: 'Primary/Img',
    component: Img,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Img animation use transform'
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        w: '127px',
        h: '190px',
        isLazyMaskVisible: false
    },
} satisfies Meta<typeof Img>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {
        src: images[0],
    },
};

export const WithSizeByNumber: Story = {
    args: {
        w: 127,
        h: 190,
        src: images[0],
        isLazyMaskVisible: true,
    },
};

export const WithRadius: Story = {
    args: {
        w: 127,
        h: 190,
        r: 10,
        src: images[0],
    },
};

export const WithRadiusByTrue: Story = {
    args: {
        w: 127,
        h: 190,
        r: true,
        src: images[0],
    },
};


export const WithAspect: Story = {
    args: {
        w: 127,
        h: false,
        isLazyMaskVisible: true,
        src: images[0],
        aspect: '1/1'
    },
};


export const WithBgColor: Story = {
    args: {
        bgColor: 'rgb(105,105,105)',
    },
};
export const WithChildContentByColor: Story = {
    args: {
        bgColor: 'rgb(105,105,105)',
        children: <div>This is acrool plugin</div>,
    },
};
export const WithChildContentByImage: Story = {
    args: {
        bgColor: 'rgb(105,105,105)',
        src: images[2],
        children: <div>This is acrool plugin</div>,
    },
};

export const WithLazy: Story = {
    args: {
        w: 600,
        h: false,
        aspect: '2/1',
        isLazy: true,
        isLazyMaskVisible: false,
    },
    render: function Render(args) {
        return <Flex className="gap-2 overflow-auto" style={{width: '100%', marginLeft: 'calc(100vw - 500px)'}}>

            {images.map((imgUrl, idx) => {
                return <Img
                    {...args}
                    key={`img_${idx}`}
                    src={imgUrl}
                />;
            })}

        </Flex>;
    },
};


export const WithLazyAndMask: Story = {
    args: {
        w: 600,
        h: false,
        aspect: '2/1',
        isLazy: true,
        isLazyMaskVisible: true,
    },
    render: function Render(args) {
        return <Flex className="gap-2 overflow-auto" style={{width: '100%', marginLeft: 'calc(100vw - 500px)'}}>

            {images.map((imgUrl, idx) => {
                return <Img
                    {...args}
                    key={`img_${idx}`}
                    src={imgUrl}
                />;
            })}

        </Flex>;
    },
};


export const WithLazyFailAndMask: Story = {
    args: {
        w: 600,
        h: false,
        aspect: '2/1',
        isLazy: true,
        isLazyMaskVisible: true,
        // bgColor: '#232323',
    },
    render: function Render(args) {
        return <Flex className="gap-2 overflow-auto" style={{width: '100%', marginLeft: 'calc(100vw - 500px)'}}>

            {failImages.map((imgUrl, idx) => {
                return <Img
                    {...args}
                    key={`img_${idx}`}
                    src={imgUrl}
                />;
            })}

        </Flex>;
    },
};
