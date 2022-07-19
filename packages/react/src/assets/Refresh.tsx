import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('refresh', false, (props: ISvgIconProps) => (
    <svg fill="none" viewBox="0 0 48 48">
        <path
            stroke={props.colors[0]}
            d="M42 8v16M6 24v16M42 24c0-9.941-8.059-18-18-18a17.947 17.947 0 0 0-12.952 5.5M6 24c0 9.941 8.059 18 18 18a17.94 17.94 0 0 0 12.5-5.048"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
