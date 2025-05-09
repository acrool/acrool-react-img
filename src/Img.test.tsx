import '@testing-library/jest-dom';

import {render, screen} from '@testing-library/react';
import React from 'react';

import Img from './Img';

describe('Img 元件', () => {
    it('應該正確渲染並帶有預設 class', () => {
        render(<Img data-testid="img-test" />);
        const imgDiv = screen.getByTestId('img-test');
        expect(imgDiv).toBeInTheDocument();
        expect(imgDiv.className).toContain('root');
    });

    it('應該正確設置 backgroundImage', () => {
        render(<Img src="https://example.com/image.png" data-testid="img-test" isLazy={false} />);
        const imgDiv = screen.getByTestId('img-test');
        expect(imgDiv).toHaveStyle({backgroundImage: 'url("https://example.com/image.png")'});
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
        const imgDiv = screen.getByTestId('img-test');
        expect(imgDiv.style.getPropertyValue('--img-width')).toBe('200px');
        expect(imgDiv.style.getPropertyValue('--img-height')).toBe('100px');
        expect(imgDiv.style.getPropertyValue('--img-radius')).toBe('10px');
    });

    it('應該渲染 children', () => {
        render(
            <Img data-testid="img-test">
                <span>child</span>
            </Img>
        );
        expect(screen.getByText('child')).toBeInTheDocument();
    });
}); 
