import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('calendar', false, (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            stroke={props.colors[0]}
            d="M5 19h38v21a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V19ZM5 9a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v10H5V9Z"
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            stroke={props.colors[0]}
            d="M16 4v8M32 4v8M28 34h6M14 34h6M28 26h6M14 26h6"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));
