import React from 'react';
import { VNode } from 'vue';
import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('close-wifi', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            stroke={props.colors[0]}
            d="M44 18.965c-6.775-6.42-15.881-8.96-24.5-7.617M38 25.799a19.705 19.705 0 0 0-9.5-5.284M10 25.799a19.814 19.814 0 0 1 4.36-3.299M16 32.314a11.261 11.261 0 0 1 5-2.91"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            fill={props.colors[0]}
            d="M24 40a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
            clip-rule="evenodd"
            fill-rule="evenodd"
        />
        <path
            stroke={props.colors[0]}
            d="M40 40 8 8M4 18.965a29.317 29.317 0 0 1 3.5-2.84"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
)  as any as VNode);
