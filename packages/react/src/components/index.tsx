/**
 * @Description 参考icon-park 处理svg公共属性
 * @Date 2022/7/2
*/
import React, { HTMLAttributes, ReactElement, createContext, useContext, useMemo } from 'react';

// 描边连接类型  'bevel':'斜角'，round:'圆角'，miter:'尖叫'，(miter-clip、arcs来自于 SVG2尚未被广泛支持)
export type StrokeLinejoin = 'miter' | 'round' | 'bevel';

// 描边端点类型 
//  butt:'指示笔划不会超出笔划的端点' 
//  round:'笔划的末端以直径等于笔划宽度的半圆延伸' 
//  square:'笔划的末端延伸有一个矩形'
//  inherit: 继承方式 由于可能不存在父类样式，所以设置
export type StrokeLinecap = 'butt' | 'round' | 'square';
 
// 主题 线性、填充、双色、多次(4色)
export type Theme = 'outline' | 'filled' | 'two-tone' | 'multi-color';
 
// svg.tsx 接收的属性
export interface ISvgIconProps {
    // 当前图标的唯一Id
    id: string;

    // 图标尺寸大小，默认1em
    size: number | string;

    // 描边宽度
    strokeWidth: number;

    // 描边端点类型
    strokeLinecap: StrokeLinecap;

    // 描边连接线类型
    strokeLinejoin: StrokeLinejoin;

    // 换肤的颜色数组
    colors: string[];
}

// Icon 期望接收的配置属性
export interface IIconConfig {

    // 图标尺寸大小，默认1em
    size: number | string;

    // 描边宽度
    strokeWidth: number;

    // 描边端点类型
    strokeLinecap: StrokeLinecap;

    // 描边连接线类型
    strokeLinejoin: StrokeLinejoin;

    // CSS前缀
    prefix: string;

    // RTL是否开启
    rtl: boolean;

    // 默认主题
    theme: Theme;

    // 主题默认颜色
    colors: {
        // 线性
        outline: {
            fill: string;
            background: string;
        };
        // 填充
        filled: {
            fill: string;
            background: string;
        };
        // 双色
        twoTone: {
            fill: string;
            twoTone: string;
        };
        // 多色
        multiColor: {
            outStrokeColor: string;
            outFillColor: string;
            innerStrokeColor: string;
            innerFillColor: string;
        };
    };
}

// 图标基础属性
export interface IIconBase{
    // 图标尺寸大小，默认1em
    size?: number | string;

    // 描边宽度
    strokeWidth?: number;

    // 描边端点类型
    strokeLinecap?: StrokeLinecap;

    // 描边连接线类型
    strokeLinejoin?: StrokeLinejoin;

    // 默认主题
    theme?: Theme;

    // 填充色
    fill?: string | string[];
}

// 被Icon包裹之后
export interface IIcon extends IIconBase {
    spin?: boolean, // 旋转
}
// 使IIconProps extends HTMLSpanElement
// 但是有一个问题，就是IIconProps传的属性与HTMLSpanElement冲突时，要使用IIconProps的
type UseValidType<T, S> = T & Omit<S, keyof T>; // 保留提出类型T 并且从S中剔除T

export type IIconProps = UseValidType<IIcon, HTMLAttributes<HTMLSpanElement>>;

// 接收的函数
export type IconRender = (props: ISvgIconProps) => ReactElement;

// 删除的函数类型
export type Icon = (props: IIconProps) => ReactElement;

// 默认属性
export const DEFAULT_ICON_CONFIGS: IIconConfig = {
    size: '1em',
    strokeWidth: 4,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    rtl: false,
    theme: 'outline',
    colors: {
        outline: {
            fill: '#333',
            background: 'transparent'
        },
        filled: {
            fill: '#333',
            background: '#FFF'
        },
        twoTone: {
            fill: '#333',
            twoTone: '#2F88FF'
        },
        multiColor: {
            outStrokeColor: '#333',
            outFillColor: '#2F88FF',
            innerStrokeColor: '#FFF',
            innerFillColor: '#43CCF8'
        }
    },
    prefix: 'i'
};

// 生成UUID
function guid(): string{
    return 'okey-icon' + (((1 + Math.random()) * 0x100000000) | 0).toString(16).substring(1);
}

// 转换属性Svg属性
export function IconConverter(id: string, icon: IIconBase, config: IIconConfig): ISvgIconProps {
    const fill = typeof icon.fill === 'string' ? [icon.fill] : icon.fill || []; // ?
    const colors = [] as string[];
    const theme: Theme = icon.theme || config.theme;
    switch(theme) {
        case 'outline':
            colors.push(typeof fill[0] === 'string' ? fill[0] : 'currentColor');
            colors.push('none');
            colors.push(typeof fill[0] === 'string' ? fill[0] : 'currentColor');
            colors.push('none');
            break;
        case 'filled': 
            colors.push(typeof fill[0] === 'string' ? fill[0] : 'currentColor');
            colors.push(typeof fill[0] === 'string' ? fill[0] : 'currentColor');
            colors.push('#FFF');
            colors.push('#FFF');
            break;
        case 'two-tone':
            colors.push(typeof fill[0] === 'string' ? fill[0] : 'currentColor');
            colors.push(typeof fill[1] === 'string' ? fill[1] : config.colors.twoTone.twoTone);
            colors.push(typeof fill[2] === 'string' ? fill[2] : 'currentColor');
            colors.push(typeof fill[3] === 'string' ? fill[3] : config.colors.twoTone.twoTone);
            break;
        case 'multi-color':
            colors.push(typeof fill[0] === 'string' ? fill[0] : 'currentColor');
            colors.push(typeof fill[1] === 'string' ? fill[1] : config.colors.multiColor.outFillColor);
            colors.push(typeof fill[2] === 'string' ? fill[2] : config.colors.multiColor.innerStrokeColor);
            colors.push(typeof fill[3] === 'string' ? fill[3] : config.colors.multiColor.innerFillColor);
            break;
    }
    return {
        size: icon.size || config.size,
        strokeWidth: icon.strokeWidth || config.strokeWidth,
        strokeLinecap: icon.strokeLinecap || config.strokeLinecap,
        strokeLinejoin: icon.strokeLinejoin || config.strokeLinejoin,
        colors,
        id
    }
}

// 图标配置Context
const IconContext = createContext(DEFAULT_ICON_CONFIGS);

// 图标配置Provider
export const IconProvider = IconContext.Provider;

export function SvgIconWrapper(name: string, rtl: boolean, render:IconRender): Icon {
    return (props: IIconProps) => {
        const {
            size,
            strokeLinecap,
            strokeLinejoin,
            strokeWidth,
            theme,
            fill,
            className,
            spin,
            ...surplus // 可能有style或其他属性
        } = props;

        const id = useMemo(guid,[]);
        // 为了方便自定义icon前缀 以及通用格式 使用provider的方式 提供常用属性
        const ICON_CONFIGS = useContext(IconContext);
        // 利用转换器，将传入的svgprops 与 默认提供(利用provider提供的) 进行混合 生成最终的
        // 优先使用props中传入的
        const svgProps = IconConverter(id, {
            size,
            strokeWidth,
            strokeLinecap,
            strokeLinejoin,
            theme,
            fill
        }, ICON_CONFIGS);
        // 定义前缀
        const cls: string[] = [ICON_CONFIGS.prefix + '-icon'];

        cls.push(ICON_CONFIGS.prefix + '-icon' + '-' + name);
        // 存在rtl
        if (rtl && ICON_CONFIGS.rtl) {
            cls.push(ICON_CONFIGS.prefix + '-icon-rtl');
        }
        // 存在旋转
        if (spin) {
            cls.push(ICON_CONFIGS.prefix + '-icon-spin');
        }
        // 存在className
        if (className) {
            cls.push(className);
        }

        return (
            <span {...surplus} className={cls.join(' ')}>
                { render(svgProps) }
            </span>
        )
    }
}