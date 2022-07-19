import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('success-picture', false, (props: ISvgIconProps) => (
    <svg fill="none" viewBox="0 0 48 48">
        <path
            fill={props.colors[0]}
            d="M44 22a2 2 0 1 0-4 0h4ZM24 8a2 2 0 1 0 0-4v4Zm15 32H9v4h30v-4ZM8 39V9H4v30h4Zm32-17v17h4V22h-4ZM9 8h15V4H9v4Zm0 32a1 1 0 0 1-1-1H4a5 5 0 0 0 5 5v-4Zm30 4a5 5 0 0 0 5-5h-4a1 1 0 0 1-1 1v4ZM8 9a1 1 0 0 1 1-1V4a5 5 0 0 0-5 5h4Z"
        />
        <path
            stroke={props.colors[0]}
            d="m6 35 10.693-9.802a2 2 0 0 1 2.653-.044L32 36M28 31l4.773-4.773a2 2 0 0 1 2.615-.186L42 31"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            fill={props.colors[0]}
            d="M31.414 9.586a2 2 0 1 0-2.828 2.828l2.828-2.828ZM34 15l-1.414 1.414a2 2 0 0 0 2.828 0L34 15Zm9.414-6.586a2 2 0 1 0-2.828-2.828l2.828 2.828Zm-14.828 4 4 4 2.828-2.828-4-4-2.828 2.828Zm6.828 4 8-8-2.828-2.828-8 8 2.828 2.828Z"
        />
    </svg>
));
