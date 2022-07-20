import React from 'react';
import { VNode } from 'vue';
import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('grid-three', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            d="M39.3 6H8.7C7.20883 6 6 7.20883 6 8.7V39.3C6 40.7912 7.20883 42 8.7 42H39.3C40.7912 42 42 40.7912 42 39.3V8.7C42 7.20883 40.7912 6 39.3 6Z"
            stroke={props.colors[0]}
            strokeWidth={props.strokeWidth}
        />
        <path
            d="M15 6L15 42"
            stroke={props.colors[0]}
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
        />
        <path
            d="M42 17H6"
            stroke={props.colors[0]}
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
        />
    </svg>
)  as any as VNode);
