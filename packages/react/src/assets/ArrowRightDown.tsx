import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('arrow-right-down', false, (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            stroke={props.colors[0]}
            d="M37 19v18H19M11.544 11.544 37 37"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
