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
    width?: TSizeValue
    minWidth?: TSizeValue
    maxWidth?: TSizeValue
    height?: TSizeValue
    minHeight?: TSizeValue
    maxHeight?: TSizeValue
    radius?: TSizeValue
    size?: 'cover' | 'contain' | string
    aspect?: string|number
    src?: string
    bgColor?: string
    position?: string
    isLazyLoaderVisible?: boolean
    isLazy?: boolean
    children?: ReactNode
}


/**
 * 使用背景當圖片的元件
 * @param className
 * @param style
 * @param width
 * @param minWidth
 * @param maxWidth
 * @param height
 * @param minHeight
 * @param maxHeight
 * @param radius
 * @param aspect
 * @param size
 * @param position
 * @param bgColor
 * @param src
 * @param isLazyLoaderVisible
 * @param isLazy
 * @param children
 */
const Img = ({
    className,
    style,
    width = '100%',
    minWidth,
    maxWidth,
    height = 'auto',
    minHeight,
    maxHeight,
    radius,
    aspect,
    size = 'cover',
    position,
    bgColor,
    src,
    isLazyLoaderVisible = false,
    isLazy = false,
    children
}: IProps) => {
    const {imageRef, isPending, isError, _imageUrl} = useLazyLoadBackground({enabled: isLazy, imageUrl: src});

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
            backgroundImage: getImgBgImageCSSVar(),
            '--img-bg-size': size,
            '--img-bg-color': bgColor,
            '--img-bg-position': position,
            '--img-width': getSizeValue(width),
            '--img-min-width': typeof minWidth !== 'undefined' ? getSizeValue(minWidth): undefined,
            '--img-max-width': typeof maxWidth !== 'undefined' ? getSizeValue(maxWidth): undefined,
            '--img-height': getSizeValue(height),
            '--img-min-height': typeof minHeight !== 'undefined' ? getSizeValue(minHeight): undefined,
            '--img-max-height': typeof maxHeight !== 'undefined' ? getSizeValue(maxHeight): undefined,
            '--img-radius': typeof radius !== 'undefined' ? getRadiusValue(radius) : undefined,
            '--img-aspect': aspect,
        } as CSS.Properties}
        data-pending={isLazy ? isPending && !isError: undefined}
        data-error={isError ? '': undefined}
        data-lazy={isLazy ? '':undefined}
        data-loader={isLazy && isLazyLoaderVisible && isPending ? '':undefined}
    >
        {children}
    </div>;
};

export default Img;
