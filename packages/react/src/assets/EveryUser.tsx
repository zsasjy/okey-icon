import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('every-user', false, (props: ISvgIconProps) => (
    <svg fill="none" viewBox="0 0 48 48">
        <circle
            stroke={props.colors[0]}
            r="5"
            cy="29"
            cx="14"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <circle
            stroke={props.colors[0]}
            r="5"
            cy="29"
            cx="34"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <circle
            stroke={props.colors[0]}
            r="5"
            cy="9"
            cx="24"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            stroke={props.colors[0]}
            d="M24 44c0-5.523-4.477-10-10-10S4 38.477 4 44M44 44c0-5.523-4.477-10-10-10s-10 4.477-10 10M34 24c0-5.523-4.477-10-10-10s-10 4.477-10 10"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
