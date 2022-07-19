import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('thumbs-down', false, (props: ISvgIconProps) => (
    <svg fill="none" viewBox="0 0 48 48">
        <path
            stroke={props.colors[0]}
            d="M20.38 29.4v7.2a5.4 5.4 0 0 0 5.4 5.4l7.2-16.2V6H12.062a3.6 3.6 0 0 0-3.6 3.06L5.98 25.26a3.6 3.6 0 0 0 3.6 4.14h10.8Z"
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            stroke={props.colors[0]}
            d="M32.98 6h4.806a4.158 4.158 0 0 1 4.194 3.6v12.6c-.283 2.09-2.086 3.838-4.194 3.8H32.98V6Z"
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
