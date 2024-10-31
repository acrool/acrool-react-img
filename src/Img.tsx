import {TSizeValue} from './types';
import CSS from 'csstype';
import {ReactNode} from 'react';
import {useLazyLoadBackground} from '@acrool/react-hooks/lazy';
import styles from './img.module.scss';
import {clsx} from 'clsx';
import {getRadiusValue, getSizeValue} from './utils';



interface IProps  {
    className?: string
    style?: CSS.Properties
    w?: TSizeValue
    h?: TSizeValue
    r?: TSizeValue
    size?: 'cover' | 'contain' | string
    aspect?: string|number
    src?: string
    bgColor?: string
    isLazyMaskVisible?: boolean
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
    r,
    aspect,
    size = 'cover',
    bgColor,
    src,
    isLazyMaskVisible = false,
    isLazy = false,
    children
}: IProps) => {

    const {imageRef, isPending, isFetching, _imageUrl} = useLazyLoadBackground({enabled: isLazy, imageUrl: src});

    /**
     * 取得ImgBg變數
     */
    const getImgBgImageCSSVar = () => {
        if(src){
            if(!isLazy){
                return `url("${src}")`;
            }
            if(_imageUrl){
                return `url("${_imageUrl}")`;
            }
        }
        return undefined;
    };


    return <div
        ref={imageRef}
        className={clsx(styles.root, className)}
        style={{
            ...style,
            '--img-bg-url': getImgBgImageCSSVar(),
            '--img-bg-size': size,
            '--img-bg-color': bgColor,
            '--img-width': getSizeValue(w),
            '--img-height': getSizeValue(h),
            '--img-radius': typeof r !== 'undefined' ? getRadiusValue(r) : undefined,
            '--img-aspect': aspect,
        } as CSS.Properties}
        data-pending={isLazy ? isPending: undefined}
        data-lazy={isLazy ? '':undefined}
        data-mask={isLazy && isLazyMaskVisible && isPending ? '':undefined}
    >
        {children}
    </div>;
};

export default Img;
