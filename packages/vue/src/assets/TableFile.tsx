import React from 'react';
import { VNode } from 'vue';
import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('table-file', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            d="M42 6H6C4.89543 6 4 6.89543 4 8V40C4 41.1046 4.89543 42 6 42H42C43.1046 42 44 41.1046 44 40V8C44 6.89543 43.1046 6 42 6Z"
            fill={props.colors[1]}
            stroke={props.colors[0]}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M4 18H44"
            stroke={props.colors[2]}
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M17.5 18V42"
            stroke={props.colors[2]}
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M30.5 18V42"
            stroke={props.colors[2]}
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M4 30H44"
            stroke={props.colors[2]}
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M44 8V40C44 41.1046 43.1046 42 42 42H6C4.89543 42 4 41.1046 4 40V8"
            stroke={props.colors[0]}
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
)  as any as VNode);
