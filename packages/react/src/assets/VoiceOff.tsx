import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('voice-off', false, (props: ISvgIconProps) => (
    <svg fill="none" viewBox="0 0 48 48">
        <path
            stroke={props.colors[0]}
            d="M31 24V11a7 7 0 1 0-14 0v13a7 7 0 1 0 14 0Z"
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            stroke={props.colors[0]}
            d="M9 23c0 8.284 6.716 15 15 15 1.753 0 3.436-.3 5-.853M39 23a14.95 14.95 0 0 1-1.248 6M24 38v6M42 42 6 6"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
