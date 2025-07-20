import '@testing-library/jest-dom';

import {render, screen} from '@testing-library/react';
import React from 'react';

import Img from './Img';

describe('Img 元件', () => {
    it('應該正確渲染並帶有預設 class', () => {
        render(<Img data-testid="img-test" />);
        const imgElement = screen.getByTestId('img-test');
        expect(imgElement).toBeInTheDocument();
        expect(imgElement.tagName).toBe('IMG');
    });

    it('應該正確設置 img src', () => {
        render(<Img src="https://example.com/image.png" data-testid="img-test" isLazy={false} />);
        const imgElement = screen.getByTestId('img-test');
        expect(imgElement).toHaveAttribute('src', 'https://example.com/image.png');
    });

    it('應該正確設置寬高與 radius', () => {
        render(
            <Img
                data-testid="img-test"
                width={200}
                height={100}
                radius={10}
                defaultUnit="px"
            />
        );
        const imgElement = screen.getByTestId('img-test');
        expect(imgElement.style.width).toBe('200px');
        expect(imgElement.style.height).toBe('100px');
        expect(imgElement.style.borderRadius).toBe('10px');
    });

    it('應該正確設置 objectFit', () => {
        render(
            <Img
                data-testid="img-test"
                objectFit="contain"
            />
        );
        const imgElement = screen.getByTestId('img-test');
        expect(imgElement.style.objectFit).toBe('contain');
    });
}); 
