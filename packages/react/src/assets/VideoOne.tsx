import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('video-one', false, (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            stroke={props.colors[0]}
            d="M4 10a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v9l8-6v23l-8-6v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10Z"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <circle
            stroke={props.colors[0]}
            r="5"
            cy="21"
            cx="17"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));