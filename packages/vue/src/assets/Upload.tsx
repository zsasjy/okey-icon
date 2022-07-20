import React from 'react';
import { VNode } from 'vue';
import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('upload', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <mask
            id="icon-171a76f7f10b972"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="48"
            height="48"
            style={{maskType:"alpha"}}
        >
            <path d="M48 0H0V48H48V0Z" fill={props.colors[0]} />
        </mask>
        <g mask="url(#icon-171a76f7f10b972)">
            <path
                d="M6 24.0083V42H42V24"
                stroke={props.colors[0]}
                strokeLinecap={props.strokeLinecap}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M33 15L24 6L15 15"
                stroke={props.colors[0]}
                strokeLinecap={props.strokeLinecap}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M23.9917 32V6"
                stroke={props.colors[0]}
                strokeLinecap={props.strokeLinecap}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
        </g>
    </svg>
)  as any as VNode);
