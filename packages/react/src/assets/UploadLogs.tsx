import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('upload-logs', false, (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            stroke={props.colors[0]}
            d="M24 44H10a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v18M35.5 44V31"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            stroke={props.colors[0]}
            d="m31 34.5 1.5-1.5 3-3 3 3 1.5 1.5"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            stroke={props.colors[0]}
            d="M16 16h16M16 24h8"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
        />
    </svg>
));