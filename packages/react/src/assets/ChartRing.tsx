import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('chart-ring', false, (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            stroke={props.colors[0]}
            d="M43.776 20.994c-1.303-8.639-8.13-15.466-16.768-16.77m-6.032.003C11.366 5.685 4 13.982 4 24 4 34.02 11.37 42.32 20.986 43.774a20.165 20.165 0 0 0 6.018.002C35.646 42.474 42.476 35.643 43.776 27"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            stroke={props.colors[0]}
            d="M24 16a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
