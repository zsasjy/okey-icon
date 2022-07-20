import React from 'react';
import { VNode } from 'vue';
import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('face-recognition', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            stroke={props.colors[0]}
            d="M33 5h8a2 2 0 0 1 2 2v8m0 18v8a2 2 0 0 1-2 2h-8m-18 0H7a2 2 0 0 1-2-2v-8m0-18V7a2 2 0 0 1 2-2h8"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
        <path
            stroke={props.colors[0]}
            d="M24 38c6.627 0 12-6.268 12-14s-5.373-14-12-14-12 6.268-12 14 5.373 14 12 14Z"
            strokeWidth={props.strokeWidth}
        />
        <path
            stroke={props.colors[0]}
            d="M6 24h36M20.07 30.106c1.267.937 2.577 1.405 3.93 1.405 1.352 0 2.698-.468 4.038-1.405"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
        />
    </svg>
)  as any as VNode);
