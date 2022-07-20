import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('application-one', false, (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            d="M41 13.9997L24 4L7 13.9997V33.9998L24 44L41 33.9998V13.9997Z"
            fill={props.colors[1]}
            stroke={props.colors[0]}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M16 18.9976L23.9932 24.0002L31.9951 18.9976"
            stroke={props.colors[2]}
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            d="M24 24V33"
            stroke={props.colors[2]}
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
