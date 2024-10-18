import type {Meta, StoryObj} from '@storybook/react';

import {Img} from '@acrool/react-img';
import React from 'react';
import {Flex} from '@acrool/react-grid';
import {images} from './data';

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
        bgColor: 'rgba(105,105,105,0.12)',
        isMaskVisible: false,
    },
} satisfies Meta<typeof Img>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {
        src: images[0],
    },
};

export const WithMask: Story = {
    args: {
        isMaskVisible: true,
    },
};


export const WithAspect: Story = {
    args: {
        w: 127,
        h: false,
        isMaskVisible: true,
        aspect: '1/1'
    },
};

export const WithLazy: Story = {
    args: {
        w: 600,
        h: false,
        isMaskVisible: true,
        aspect: '2/1',
        isLazy: true,
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
