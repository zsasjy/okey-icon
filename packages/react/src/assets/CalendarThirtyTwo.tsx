import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('calendar-thirty-two', false, (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            stroke={props.colors[0]}
            d="M4 8h40v36H4z"
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            stroke={props.colors[0]}
            d="M28 20v14h8V20h-8Z"
            clip-rule="evenodd"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            stroke={props.colors[0]}
            d="M17 4v8M31 4v8M12 20h8v14h-8M20 27h-6"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));