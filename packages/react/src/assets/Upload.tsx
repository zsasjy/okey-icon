import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('upload', false, (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <mask
            style={{maskType:"alpha"}}
            height={props.size}
            width={props.size}
            y="0"
            x="0"
            maskUnits="userSpaceOnUse"
            id="a"
        >
            <path fill={props.colors[0]} d="M48 0H0v48h48V0Z" />
        </mask>
        <g
            mask="url(#a)"
            stroke={props.colors[0]}
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        >
            <path d="M6 24.008V42h36V24M33 15l-9-9-9 9M23.992 32V6" />
        </g>
    </svg>
));
