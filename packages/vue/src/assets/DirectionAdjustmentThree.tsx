import React from 'react';
import { VNode } from 'vue';
import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('direction-adjustment-three', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            stroke={props.colors[0]}
            d="m18 10 6-6m0 0 6 6m-6-6v20m0 0v20m0-20h20m-20 0H4m14 14 6 6m0 0 6-6m8-20 6 6m0 0-6 6M10 18l-6 6m0 0 6 6"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
)  as any as VNode);
