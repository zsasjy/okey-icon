import React from 'react';
import { VNode } from 'vue';
import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('paperclip', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            stroke={props.colors[0]}
            d="m26.122 37.435 14.142-14.142c2.828-2.828 4.243-9.9-.707-14.85-4.95-4.949-12.02-3.535-14.85-.706L5.617 26.829c-1.414 1.414-3.536 6.364.707 10.606 4.242 4.243 9.192 2.121 10.607.707l18.384-18.385c1.414-1.414 2.122-4.95 0-7.07-2.121-2.122-5.657-1.415-7.07 0L14.807 26.121"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
)  as any as VNode);
