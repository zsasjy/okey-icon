import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('shopping', false, (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path d="M39 32H13L8 12H44L39 32Z" fill={props.colors[1]} />
        <path
            d="M3 6H6.5L8 12M8 12L13 32H39L44 12H8Z"
            stroke={props.colors[0]}
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <circle
            cx="13"
            cy="39"
            r="3"
            stroke={props.colors[0]}
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <circle
            cx="39"
            cy="39"
            r="3"
            stroke={props.colors[0]}
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
