import React, { HTMLAttributes, ReactElement } from 'react';
export declare type StrokeLinejoin = 'miter' | 'round' | 'bevel';
export declare type StrokeLinecap = 'butt' | 'round' | 'square';
export declare type Theme = 'outline' | 'filled' | 'two-tone' | 'multi-color';
export interface ISvgIconProps {
    id: string;
    size: number | string;
    strokeWidth: number;
    strokeLinecap: StrokeLinecap;
    strokeLinejoin: StrokeLinejoin;
    colors: string[];
}
export interface IIconConfig {
    size: number | string;
    strokeWidth: number;
    strokeLinecap: StrokeLinecap;
    strokeLinejoin: StrokeLinejoin;
    prefix: string;
    rtl: boolean;
    theme: Theme;
    colors: {
        outline: {
            fill: string;
            background: string;
        };
        filled: {
            fill: string;
            background: string;
        };
        twoTone: {
            fill: string;
            twoTone: string;
        };
        multiColor: {
            outStrokeColor: string;
            outFillColor: string;
            innerStrokeColor: string;
            innerFillColor: string;
        };
    };
}
export interface IIconBase {
    size?: number | string;
    strokeWidth?: number;
    strokeLinecap?: StrokeLinecap;
    strokeLinejoin?: StrokeLinejoin;
    theme?: Theme;
    fill?: string | string[];
}
export interface IIcon extends IIconBase {
    spin?: boolean;
}
declare type UseValidType<T, S> = T & Omit<S, keyof T>;
export declare type IIconProps = UseValidType<IIcon, HTMLAttributes<HTMLSpanElement>>;
export declare type IconRender = (props: ISvgIconProps) => ReactElement;
export declare type Icon = (props: IIconProps) => ReactElement;
export declare const DEFAULT_ICON_CONFIGS: IIconConfig;
export declare function IconConverter(id: string, icon: IIconBase, config: IIconConfig): ISvgIconProps;
export declare const IconProvider: React.Provider<IIconConfig>;
export declare function SvgIconWrapper(name: string, rtl: boolean, render: IconRender): Icon;
export {};
