/**
 * 
 */

import Vue, {ComponentOptions, CreateElement, VNode, VueConstructor} from 'vue';
import {ArrayPropsDefinition, DefaultComputed, DefaultData, DefaultMethods} from 'vue/types/options';

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

export type IconHelper = CreateElement; // Vue创建元素

export interface IIconProps extends IIconBase {
    spin?: boolean;
}

export interface IIconInstance extends Vue, IIconProps {
    id: string, // 标识
    ICON_CONFIGS?: IIconConfig // ICON 配置
}
// svg => vue 图标属性
export type IconOptions = ComponentOptions<IIconInstance, DefaultData<{id: string}>, DefaultMethods<never>, DefaultComputed, ArrayPropsDefinition<IIconProps>, IIconProps>;

// svg的图标渲染器
export type IconRender = (h: IconHelper, props: ISvgIconProps) => VNode;

// 包裹后的图标 type
export type Icon = VueConstructor<IIconInstance>;

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
    prefix: 'okey'
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


export function SvgIconWrapper(name: string, rtl: boolean, render:IconRender): Icon {
    
    const options: IconOptions = {
        name: 'icon-' + name,
        inject: {
            ICON_CONFIGS: { default: DEFAULT_ICON_CONFIGS }
        },
        props: ['size', 'strokeWidth', 'strokeLinecap', 'strokeLinejoin', 'theme', 'fill', 'spin'],
        data() {
            return { id: guid() };
        },
        inheritAttrs: false,
        render( this:IIconInstance, h: CreateElement): VNode {
            const {
                size,
                strokeWidth,
                strokeLinecap,
                strokeLinejoin,
                theme,
                fill,
                id,
                spin,
                ICON_CONFIGS = DEFAULT_ICON_CONFIGS
            } = this;

            const svgProps = IconConverter(id, {
                size,
                strokeWidth,
                strokeLinecap,
                strokeLinejoin,
                theme,
                fill
            }, ICON_CONFIGS);

            const cls: string[] = [ICON_CONFIGS.prefix + '-icon'];

            cls.push(ICON_CONFIGS.prefix + '-icon' + '-' + name);

            if (rtl && ICON_CONFIGS.rtl) {
                cls.push(ICON_CONFIGS.prefix + '-icon-rtl');
            }

            if (spin) {
                cls.push(ICON_CONFIGS.prefix + '-icon-spin');
            }

            return h('span', {
                class: cls.join(' '),
                on: this.$listeners,
                attrs: this.$attrs
            }, [render(h, svgProps)]);
        }
    }
    return options as Icon;
}