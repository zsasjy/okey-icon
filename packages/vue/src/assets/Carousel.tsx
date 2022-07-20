import React from 'react';
import { VNode } from 'vue';
import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('carousel', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            d="M4 11C4 9.89543 4.89543 9 6 9H42C43.1046 9 44 9.89543 44 11V35C44 36.1046 43.1046 37 42 37H6C4.89543 37 4 36.1046 4 35V11Z"
            fill={props.colors[1]}
            stroke={props.colors[0]}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M28 17H20V29H28V17Z"
            fill={props.colors[3]}
            stroke={props.colors[2]}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M44 17H36V29H44"
            stroke={props.colors[2]}
            strokeWidth={props.strokeWidth}
            strokeLinecap={props.strokeLinecap}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M4 17H12V29H4"
            stroke={props.colors[2]}
            strokeWidth={props.strokeWidth}
            strokeLinecap={props.strokeLinecap}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M4 13V33"
            stroke={props.colors[0]}
            strokeWidth={props.strokeWidth}
            strokeLinecap={props.strokeLinecap}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M44 13V33"
            stroke={props.colors[0]}
            strokeWidth={props.strokeWidth}
            strokeLinecap={props.strokeLinecap}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
)  as any as VNode);
