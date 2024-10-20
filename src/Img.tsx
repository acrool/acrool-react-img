import {TSizeValue} from './types';
import CSS from 'csstype';
import {ReactNode} from 'react';
import {useLazyLoadBackground} from '@acrool/react-hooks/lazy';
import styles from './img.module.scss';
import {clsx} from 'clsx';
import {getSizeValue} from './utils';



interface IProps  {
    className?: string
    style?: CSS.Properties
    w?: TSizeValue
    h?: TSizeValue
    size?: 'cover' | 'contain' | string
    aspect?: string|number
    src?: string
    bgColor?: string
    isMaskVisible?: boolean
    isLazy?: boolean
    children?: ReactNode
}


/**
 * 使用背景當圖片的元件
 * @param className
 * @param style
 * @param width
 * @param size
 * @param src
 * @param isLazy
 * @param children
 */
const Img = ({
    className,
    style,
    w = '100%',
    h = 'auto',
    aspect,
    size = 'cover',
    bgColor,
    src,
    isMaskVisible = false,
    isLazy = false,
    children
}: IProps) => {

    const {imageRef} = useLazyLoadBackground({enabled: isLazy, imageUrl: src});

    /**
     * 取得ImgBg變數
     */
    const getImgBgImageCSSVar = () => {
        if(src && !isLazy){
            return `url("${src}")`;
        }
        return undefined;
    };


    return <div
        ref={imageRef}
        className={clsx(styles.root, className)}
        style={{
            ...style,
            '--bg-image': getImgBgImageCSSVar(),
            '--img-bg-size': size,
            '--img-bg-color': bgColor,
            '--img-width': getSizeValue(w),
            '--img-height': getSizeValue(h),
            '--img-aspect': aspect,
        } as CSS.Properties}
        data-lazy={isLazy ? '':undefined}
        data-mask={isMaskVisible ? '':undefined}
    >
        {children}
    </div>;
};

export default Img;
