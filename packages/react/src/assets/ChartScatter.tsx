import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('chart-scatter', false, (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            stroke={props.colors[0]}
            d="M6 6v36h36"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            fill={props.colors[0]}
            d="M20 24a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM37 16a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM15 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM33 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            clip-rule="evenodd"
            fill-rule="evenodd"
        />
    </svg>
));
