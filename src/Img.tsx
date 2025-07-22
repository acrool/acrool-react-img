import {useLazyLoadImage} from '@acrool/react-hooks/lazy';
import {clsx} from 'clsx';
import CSS from 'csstype';

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
    isLazy?: boolean
    defaultUnit?: TSizeUnit
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
 * @param isLazy
 * @param defaultUnit
 * @param rest
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
    isLazy = false,
    defaultUnit = 'px',
    ...rest
}: IImgProps) => {
    const {imageRef, isPending, isError} = useLazyLoadImage({enabled: isLazy, imageUrl: src});

    /**
     * 取得圖片 URL
     */
    const getImageUrl = () => {
        if(src){
            if(!isLazy){
                return src;
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
        baseStyle.aspectRatio = typeof aspect !== 'undefined' ? getAspectValue(aspect) as string: undefined;

        // 處理 min/max 尺寸 (這些需要通過 style 設置)
        baseStyle.minWidth = typeof minWidth !== 'undefined' ? getSizeValue(minWidth, defaultUnit): undefined;
        baseStyle.maxWidth = typeof maxWidth !== 'undefined' ? getSizeValue(maxWidth, defaultUnit): undefined;
        baseStyle.minHeight = typeof minHeight !== 'undefined' ? getSizeValue(minHeight, defaultUnit): undefined;
        baseStyle.maxHeight = typeof maxHeight !== 'undefined' ? getSizeValue(maxHeight, defaultUnit): undefined;


        return {
            ...baseStyle,
            ...style,
        };
    };


    return (
        <img
            ref={imageRef as React.Ref<HTMLImageElement>}
            src={getImageUrl()}
            alt={alt}
            width={getSizeValue(width, defaultUnit)}
            height={getSizeValue(height, defaultUnit)}
            className={clsx(styles.img, className)}
            style={getImageStyle()}
            data-pending={isLazy ? isPending && !isError: undefined}
            data-error={isError ? '': undefined}
            data-lazy-src={isLazy && isPending ? src: undefined}
            data-lazy={isLazy ? '':undefined}
            {...rest}
        />
    );
};

export default Img;
