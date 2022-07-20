import React from 'react';
import { VNode } from 'vue';
import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('close-remind', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            stroke={props.colors[0]}
            d="M42 38s-6-5-6-19c0-6.627-5.373-12-12-12-2.54 0-4.896.79-6.835 2.136M30 38H6s5.57-4.641 5.976-17.5"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path stroke={props.colors[0]} d="M18 38h12a6 6 0 0 1-12 0Z" strokeWidth={props.strokeWidth} />
        <path fill={props.colors[0]} d="M24 2a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4Z" clip-rule="evenodd" fill-rule="evenodd" />
        <path
            stroke={props.colors[0]}
            d="m7 6.5 34 38"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
)  as any as VNode);
