import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('switch-button', false, (props: ISvgIconProps) => (
    <svg fill="none" viewBox="0 0 48 48">
        <path
            stroke={props.colors[0]}
            d="M36 4H12a8 8 0 1 0 0 16h24a8 8 0 1 0 0-16ZM36 28H12a8 8 0 1 0 0 16h24a8 8 0 1 0 0-16Z"
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            stroke={props.colors[0]}
            d="M36 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 38a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
