import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('table-file', false, (props: ISvgIconProps) => (
    <svg fill="none" viewBox="0 0 48 48">
        <path
            stroke={props.colors[0]}
            d="M42 6H6a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z"
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            stroke={props.colors[0]}
            d="M4 18h40M17.5 18v24M30.5 18v24M4 30h40M44 8v32a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
