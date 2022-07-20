import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('bad-two', false, (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
        <path
            stroke={props.colors[0]}
            d="M4.18 26.834A2 2 0 0 0 6.175 29H10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7.84a2 2 0 0 0-1.993 1.834l-1.666 20ZM18 26.625c0 .836.52 1.584 1.275 1.94 1.649.778 4.458 2.341 5.725 4.454 1.633 2.724 1.941 7.645 1.991 8.772.007.158.003.316.024.472.271 1.953 4.04-.328 5.485-2.74.785-1.308.885-3.027.803-4.37-.089-1.435-.51-2.823-.923-4.201l-.88-2.937h10.857a2 2 0 0 0 1.925-2.543l-5.37-19.016A2 2 0 0 0 36.986 5H20a2 2 0 0 0-2 2v19.625Z"
            strokeLinecap={props.strokeLinecap}
            strokeWidth={props.strokeWidth}
            strokeLinejoin={props.strokeLinejoin}
        />
    </svg>
));