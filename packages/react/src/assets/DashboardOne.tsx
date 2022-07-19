import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('dashboard-one', false, (props: ISvgIconProps) => (
    <svg fill="none" viewBox="0 0 49 48">
        <path
            stroke={props.colors[0]}
            d="M24.778 7c-11.046 0-20 8.954-20 20 0 5.23 1.713 10.436 5 14h30c3.286-3.564 5-8.77 5-14 0-11.046-8.954-20-20-20Z"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <circle
            stroke={props.colors[0]}
            r="4"
            cy="30"
            cx="24.778"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            stroke={props.colors[0]}
            d="M24.778 20v6M24.778 12v2M9.778 28h2M13.778 18l1.414 1.414M37.778 28h2M34.778 19.414 36.192 18"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
