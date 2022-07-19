import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('new-computer', false, (props: ISvgIconProps) => (
    <svg fill="none" viewBox="0 0 48 48">
        <rect
            stroke={props.colors[0]}
            rx="3"
            height={props.size}
            width={props.size}
            y="6"
            x="6"
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            stroke={props.colors[0]}
            d="M14 42h20M24 34v8"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
