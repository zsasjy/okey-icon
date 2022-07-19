import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('mosaic', false, (props: ISvgIconProps) => (
    <svg fill="none" viewBox="0 0 48 48">
        <path
            fill={props.colors[0]}
            d="M44 36h-8v8h8v-8ZM28 36h-8v8h8v-8ZM12 36H4v8h8v-8ZM44 20h-8v8h8v-8ZM28 20h-8v8h8v-8ZM12 20H4v8h8v-8ZM44 4h-8v8h8V4ZM28 4h-8v8h8V4ZM12 4H4v8h8V4ZM20 12h-8v8h8v-8ZM20 28h-8v8h8v-8ZM36 12h-8v8h8v-8ZM36 28h-8v8h8v-8Z"
        />
    </svg>
));
