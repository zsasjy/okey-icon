import React from 'react';
import { VNode } from 'vue';
import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('more-one', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="12" r="3" fill={props.colors[0]} />
        <circle cx="24" cy="24" r="3" fill={props.colors[0]} />
        <circle cx="24" cy="35" r="3" fill={props.colors[0]} />
    </svg>
)  as any as VNode);
