import React, { useState } from "react";
import { IconProps } from './AllIcon';
import { Modal, Select, InputNumber, Input, Form, Popover } from "antd";
import { SketchPicker } from 'react-color'
import styles from './index.module.less';
import "./index.less";

const propEnum = {
    theme: [
        { label: '线性', value: 'outline' }, 
        { label: '填充', value: 'filled' }, 
        { label: '双色', value: 'two-tone' }, 
        { label: '多色', value: 'multi-color' }, 
    ],
    strokeLinecap: [
        { label: 'butt', value: 'butt' }, 
        { label: 'round', value: 'round' }, 
        { label: 'square', value: 'square' }, 
    ],
    strokeLinejoin: [
        { label: 'miter', value: 'miter' }, 
        { label: 'round', value: 'round' }, 
        { label: 'bevel', value: 'bevel' }, 
    ]
}

interface IProps {
    visible: boolean;
    info?: IconProps;
    onValueChange: (v: boolean) => void;
}

export default function DownloadModal (props: IProps) {
    const { visible, info, onValueChange } = props;
    const [size,setSize] = useState(32);
    const [strokeWidth,setStrokeWidth] = useState(4);
    const [theme,setTheme] = useState<'outline' | 'filled' | 'two-tone' | 'multi-color'>('outline');
    const [strokeLinecap,setStrokeLinecap] = useState<'butt' | 'round' | 'square'>('round');
    const [strokeLinejoin,setStrokeLinejoin] = useState<'miter' | 'round' | 'bevel'>('round');
    const [color,setColor] = useState<string | string[]>("333333");
    return (
        <Modal 
            width={600}
            visible={visible}
            onCancel={() => onValueChange(false)}
            maskClosable={false}
            cancelText={null}
            okText={null}
            footer={null}
        >
            <div className={styles.iconWrapper}>
                { info?.component({
                    size,
                    strokeWidth,
                    strokeLinecap,
                    strokeLinejoin,
                    theme,
                    fill: `#${color}`
                })}
            </div>
            <div className={styles.functional}>
                <div className={styles.colors}>
                    <Form.Item colon label={"边线颜色"}>
                        <div style={{ display: 'flex' }}>
                            <Input 
                                value={ color }
                                style={{ width: 130 }}
                                addonBefore='#'
                            />
                            <Popover
                                placement="top" 
                                trigger='click'
                                title = { 
                                    <SketchPicker 
                                        color={`#${color}`} 
                                        onChange={ v => setColor(v.hex.slice(1,v.hex.length)) }
                                    />
                                }
                            >
                                <div className={styles.color} style={{backgroundColor: `#${color}`}}></div> 
                            </Popover>
                        </div>
                    </Form.Item>
                </div>
                <div className={styles.handle}>
                    <Form.Item colon label={"图标大小"}>
                        <InputNumber value={size} style={{width: '205.99px'}} onChange={(v) => setSize(v > 0 ? v : 0)}/>
                    </Form.Item>
                    <Form.Item colon label={"图标主题"}>
                        <Select value={theme} onChange={(v) => setTheme(v)}>
                            { propEnum['theme'].map(item => <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>) }
                        </Select>
                    </Form.Item>
                    <Form.Item colon label={"线段粗细"}>
                        <InputNumber value={strokeWidth} style={{width: '205.99px'}} onChange={(v) => setStrokeWidth(v > 0 ? v : 0)}/>
                    </Form.Item>
                    <Form.Item colon label={"端点类型"}>
                        <Select value={strokeLinejoin} onChange={(v) => setStrokeLinejoin(v)}>
                            { propEnum['strokeLinejoin'].map(item => <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option> )}
                        </Select>
                    </Form.Item>
                    <Form.Item colon label={"拐点类型"}>
                        <Select value={strokeLinecap} onChange={(v) => setStrokeLinecap(v)}>
                            { propEnum['strokeLinecap'].map(item => <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>)}
                        </Select>
                    </Form.Item>
                </div>
            </div>
        </Modal>
    )
}