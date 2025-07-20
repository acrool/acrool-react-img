import {useLazyLoadBackground} from '@acrool/react-hooks/lazy';
import {clsx} from 'clsx';
import CSS from 'csstype';
import {ReactNode} from 'react';

import styles from './img.module.scss';
import {TSizeUnit, TSizeValue} from './types';
import {getAspectValue, getRadiusValue, getSizeValue} from './utils';



export interface IImgProps extends React.HTMLAttributes<HTMLImageElement>  {
    className?: string
    style?: CSS.Properties
    width?: TSizeValue
    minWidth?: TSizeValue
    maxWidth?: TSizeValue
    height?: TSizeValue
    minHeight?: TSizeValue
    maxHeight?: TSizeValue
    radius?: TSizeValue
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
    aspect?: true|string|number
    src?: string
    alt?: string
    bgColor?: string
    position?: string
    isLazyLoaderVisible?: boolean
    isLazy?: boolean
    defaultUnit?: TSizeUnit
    children?: ReactNode
}


/**
 * 使用 img 標籤的圖片元件
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
 * @param objectFit
 * @param position
 * @param bgColor
 * @param src
 * @param alt
 * @param isLazyLoaderVisible
 * @param isLazy
 * @param defaultUnit
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
    objectFit = 'cover',
    position,
    bgColor,
    src,
    alt = '',
    isLazyLoaderVisible = false,
    isLazy = false,
    defaultUnit = 'px',
    children,
    ...rest
}: IImgProps) => {
    const {imageRef, isPending, isError, _imageUrl} = useLazyLoadBackground({enabled: isLazy, imageUrl: src});

    /**
     * 取得圖片 URL
     */
    const getImageUrl = () => {
        if(src){
            if(!isLazy){
                return src;
            }
            if(_imageUrl){
                return _imageUrl;
            }
        }
        return undefined;
    };

    /**
     * 取得樣式物件
     */
    const getImageStyle = () => {
        const baseStyle: CSS.Properties = {
            objectFit: objectFit,
            objectPosition: position || 'center',
            backgroundColor: bgColor,
            borderRadius: typeof radius !== 'undefined' ? getRadiusValue(radius, defaultUnit) : undefined,
        };

        // 處理 aspect ratio
        if (typeof aspect !== 'undefined') {
            const aspectValue = getAspectValue(aspect);
            if (aspectValue !== false) {
                baseStyle.aspectRatio = aspectValue as string;
            }
        }

        // 處理 min/max 尺寸 (這些需要通過 style 設置)
        if (minWidth !== undefined) {
            if (typeof minWidth === 'number') {
                baseStyle.minWidth = `${minWidth}${defaultUnit}`;
            } else if (typeof minWidth === 'string') {
                baseStyle.minWidth = minWidth;
            }
        }

        if (maxWidth !== undefined) {
            if (typeof maxWidth === 'number') {
                baseStyle.maxWidth = `${maxWidth}${defaultUnit}`;
            } else if (typeof maxWidth === 'string') {
                baseStyle.maxWidth = maxWidth;
            }
        }

        if (minHeight !== undefined) {
            if (typeof minHeight === 'number') {
                baseStyle.minHeight = `${minHeight}${defaultUnit}`;
            } else if (typeof minHeight === 'string') {
                baseStyle.minHeight = minHeight;
            }
        }

        if (maxHeight !== undefined) {
            if (typeof maxHeight === 'number') {
                baseStyle.maxHeight = `${maxHeight}${defaultUnit}`;
            } else if (typeof maxHeight === 'string') {
                baseStyle.maxHeight = maxHeight;
            }
        }

        return {
            ...baseStyle,
            ...style,
        };
    };

    /**
     * 取得原生 width 屬性
     */
    const getNativeWidth = () => {
        if (width === undefined) return undefined;
        if (typeof width === 'number') {
            return width;
        }
        if (typeof width === 'string') {
            // 如果是純數字字符串，轉換為數字
            const numValue = parseFloat(width);
            if (!isNaN(numValue) && width.match(/^\d+(\.\d+)?$/)) {
                return numValue;
            }
            // 否則返回字符串（如 '100%'）
            return width;
        }
        if (width === true) {
            return '100%';
        }
        if (width === false) {
            return 'auto';
        }
        return undefined;
    };

    /**
     * 取得原生 height 屬性
     */
    const getNativeHeight = () => {
        if (height === undefined) return undefined;
        if (typeof height === 'number') {
            return height;
        }
        if (typeof height === 'string') {
            // 如果是純數字字符串，轉換為數字
            const numValue = parseFloat(height);
            if (!isNaN(numValue) && height.match(/^\d+(\.\d+)?$/)) {
                return numValue;
            }
            // 否則返回字符串（如 '100%'）
            return height;
        }
        if (height === true) {
            return '100%';
        }
        if (height === false) {
            return 'auto';
        }
        return undefined;
    };

    return (
        <img
            ref={imageRef as React.Ref<HTMLImageElement>}
            src={getImageUrl()}
            alt={alt}
            width={getNativeWidth()}
            height={getNativeHeight()}
            className={clsx(styles.img, className)}
            style={getImageStyle()}
            data-pending={isLazy ? isPending && !isError: undefined}
            data-error={isError ? '': undefined}
            data-lazy={isLazy ? '':undefined}
            data-loader={isLazy && isLazyLoaderVisible && isPending ? '':undefined}
            {...rest}
        />
    );
};

export default Img;
