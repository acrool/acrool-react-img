import type {Meta, StoryObj} from '@storybook/react';

import {Img} from '@acrool/react-img';
import React from 'react';
import {Flex} from '@acrool/react-grid';
import {generatorArray} from '@acrool/js-utils/array';

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
        bgColor: '#696969',
        src: 'https://fakeimg.pl/1000',
        isMaskVisible: false,
    },
} satisfies Meta<typeof Img>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {},
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
        w: 127,
        h: false,
        bgColor: '#696969',
        isMaskVisible: true,
        aspect: '1/1',
        // isLazy: true,
    },
    render: function Render(args) {
        return <Flex className="gap-2 overflow-auto" style={{width: '100%'}}>

            {generatorArray(20).map((key, idx) => {
                return <Img
                    {...args}
                    key={key}
                    src={`https://fakeimg.pl/${idx + 200}/`}
                />;
            })}

        </Flex>;
    },
};
