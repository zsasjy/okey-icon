import React from 'react';
import { ISvgIconProps, SvgIconWrapper } from '../components';

export default SvgIconWrapper('qrcode-half', false, (props: ISvgIconProps) => (
    <svg viewBox="0 0 1024 1024" width={props.size} height={props.size} fill="none">
        <path
            d="M11.2 12.8L1.6 0h384v387.2L11.2 12.8zM321.6 320V62.4H67.2L321.6 320z m-68.8-65.6L129.6 128v-3.2h129.6v129.6h-6.4z m769.6 128H640V0h384v382.4z m-320-62.4h254.4V62.4H702.4V320z m144 544h46.4v-62.4h62.4v160h62.4V1024h-22.4l-148.8-160zM576 587.2l-128-131.2V156.8h94.4V32h62.4v192h-94.4v94.4h62.4v62.4h-62.4v94.4h222.4v126.4h-62.4v-62.4H576v48z m81.6 84.8h172.8V480h62.4v-62.4h62.4V480h62.4v65.6h-129.6V672h129.6v62.4H718.4c3.2 0-60.8-62.4-60.8-62.4zM768 124.8h129.6v129.6H768V124.8z"
            fill={props.colors[0]}
        />
    </svg>
));
