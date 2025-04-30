import {TSizeUnit, TSizeValue} from './types';


export const getSizeValue = (value: TSizeValue, defaultUnit: TSizeUnit = 'px') => {
    if(value === true){
        return '100%';
    }
    if(value === false){
        return 'auto';
    }
    if(typeof value === 'number'){
        return `${value}${defaultUnit}`;
    }
    return String(value);
};


export const getRadiusValue = (value: TSizeValue, defaultUnit: TSizeUnit = 'px') => {
    if(value === true){
        return '50%';
    }
    if(value === false){
        return 'auto';
    }
    if(typeof value === 'number'){
        return `${value}${defaultUnit}`;
    }
    return String(value);
};
