import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('platte', false, (props: ISvgIconProps) => (
    <svg fill="none" viewBox="0 0 48 48">
        <path
            stroke={props.colors[0]}
            d="M24 44c5.96 0 2.336-8.864 6-13 3.126-3.53 14-1.914 14-7 0-11.046-8.954-20-20-20S4 12.954 4 24s8.954 20 20 20Z"
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            stroke={props.colors[0]}
            d="M28 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM17 34a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
