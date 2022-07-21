import { ISvgIconProps, IconHelper, SvgIconWrapper } from '../components';

export default SvgIconWrapper('vue', false, (h: IconHelper, props: ISvgIconProps) => (
    <svg viewBox="0 0 1024 1024" width={props.size} height={props.size} fill="none">
        <path d="M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z" fill={props.colors[0]} />
        <path d="M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z" fill={props.colors[0]} />
    </svg>
) as any);
