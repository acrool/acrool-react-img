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
        width: '127px',
        height: '190px',
        isLazyLoaderVisible: false
    },
} satisfies Meta<typeof Img>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {
        src: images[0],
    },
};
export const WithBigSize: Story = {
    args: {
        src: images[0],
        width: 500,
        height: 900,
    },
};

export const WithSizeByNumber: Story = {
    args: {
        width: 127,
        height: 190,
        src: images[0],
        isLazyLoaderVisible: true,
    },
};

export const WithPosition: Story = {
    args: {
        width: 127,
        height: 190,
        position: 'bottom right',
        src: images[0],
        isLazyLoaderVisible: true,
    },
};

export const WithRadius: Story = {
    args: {
        width: 127,
        height: 190,
        radius: 10,
        src: images[0],
    },
};

export const WithRadiusByTrue: Story = {
    args: {
        width: 127,
        height: 190,
        radius: true,
        src: images[0],
    },
};


export const WithAspect: Story = {
    args: {
        width: 127,
        height: false,
        isLazyLoaderVisible: true,
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
        width: 600,
        height: false,
        aspect: '2/1',
        isLazy: true,
        isLazyLoaderVisible: false,
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
        width: 600,
        height: false,
        aspect: '2/1',
        isLazy: true,
        isLazyLoaderVisible: true,
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
        width: 600,
        height: false,
        aspect: '2/1',
        isLazy: true,
        isLazyLoaderVisible: true,
        // bgColor: '#232323',
    },
    render: function Render(args) {
        return <Flex className="gap-2 overflow-auto" style={{width: '100%', marginLeft: 'calc(100vw - 500px)'}}>

            {failImages.map((imgUrl, idx) => {
                return <Img
                    {...args}
                    key={`img_${idx}`}
                    src={imgUrl}
                >
                    {imgUrl}
                </Img>;
            })}

        </Flex>;
    },
};
