import {useLazyLoadBackground} from '@acrool/react-hooks/lazy';
import {clsx} from 'clsx';
import CSS from 'csstype';
import {ReactNode} from 'react';

import styles from './bgImg.module.scss';
import {TSizeUnit, TSizeValue} from './types';
import {getAspectValue, getRadiusValue, getSizeValue} from './utils';



export interface IBgImgProps extends React.HTMLAttributes<HTMLDivElement>  {
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
    aspect?: true|string|number
    src?: string
    bgColor?: string
    position?: string
    isLazyLoaderVisible?: boolean
    isLazy?: boolean
    defaultUnit?: TSizeUnit
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
 * @param defaultUnit
 * @param children
 */
const BgImg = ({
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
    defaultUnit = 'px',
    children,
    ...rest
}: IBgImgProps) => {
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
        className={clsx(styles.bgImg, className)}
        style={{
            ...style,
            backgroundImage: getImgBgImageCSSVar(),
            '--img-bg-size': size,
            '--img-bg-color': bgColor,
            '--img-bg-position': position,
            '--img-width': getSizeValue(width, defaultUnit),
            '--img-min-width': typeof minWidth !== 'undefined' ? getSizeValue(minWidth, defaultUnit): undefined,
            '--img-max-width': typeof maxWidth !== 'undefined' ? getSizeValue(maxWidth, defaultUnit): undefined,
            '--img-height': getSizeValue(height, defaultUnit),
            '--img-min-height': typeof minHeight !== 'undefined' ? getSizeValue(minHeight, defaultUnit): undefined,
            '--img-max-height': typeof maxHeight !== 'undefined' ? getSizeValue(maxHeight, defaultUnit): undefined,
            '--img-radius': typeof radius !== 'undefined' ? getRadiusValue(radius, defaultUnit) : undefined,
            '--img-aspect': typeof aspect !== 'undefined' ? getAspectValue(aspect): undefined,
        } as CSS.Properties}
        data-pending={isLazy ? isPending && !isError: undefined}
        data-error={isError ? '': undefined}
        data-lazy={isLazy ? '':undefined}
        data-loader={isLazy && isLazyLoaderVisible && isPending ? '':undefined}
        {...rest}
    >
        {children}
    </div>;
};

export default BgImg;
