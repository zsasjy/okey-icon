import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('dislike', false, (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            stroke={props.colors[0]}
            d="m24 31-3-5 7-6-9-5 1-5.8C18.5 8.432 16.8 8 15 8 8.925 8 4 12.925 4 19c0 11 13 21 20 23 7-2 20-12 20-23 0-6.075-4.925-11-11-11-1.8 0-3.5.433-5 1.2"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
