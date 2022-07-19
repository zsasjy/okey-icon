import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('reduce', false, (props: ISvgIconProps) => (
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
            d="M16 24h16"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
