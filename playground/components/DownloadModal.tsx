import React, { useCallback, useEffect, useMemo, useState } from "react";
import { IconProps } from './AllIcon';
import { Modal, Select, InputNumber, Input, Form, Popover, Button, message } from "antd";
import { SketchPicker } from 'react-color';
import throttle from 'lodash.throttle';
import styles from './index.module.less';
import { useCopy } from 'dumi/theme';
import { obj2str, propEnum, downloadSvg } from './util'
import "./index.less";

interface IProps {
    visible: boolean;
    info?: IconProps;
    onValueChange: (v: boolean) => void;
}

function FormItemColor (props: { value:string, onValueChange:(v: string) => void, label: string }) {
    const { value, onValueChange, label } = props;
    return (
        <Form.Item colon label={ label }>
            <div style={{ display: 'flex' }}>
                <Input 
                    value={ value }
                    onChange={ throttle((e) => onValueChange && onValueChange(e.target.value),300) }
                    style={{ width: 120 }}
                    maxLength={ 6 }
                    addonBefore='#'
                />
                <Popover
                    placement="top" 
                    trigger='click'
                    title = { 
                        <SketchPicker 
                            color={`#${value}`} 
                            onChange={ v => onValueChange(v.hex.slice(1,v.hex.length)) }
                        />
                    }
                >
                    <div className={styles.color} style={{backgroundColor: `#${value}`}}></div> 
                </Popover>
            </div>
        </Form.Item>
    )
}

export default function DownloadModal (props: IProps) {
    const { visible, info, onValueChange } = props;
    const [size, setSize] = useState(32);
    const [strokeWidth,setStrokeWidth] = useState(4);
    const [copyCode, copyStatus] = useCopy();
    const [theme,setTheme] = useState<'outline' | 'filled' | 'two-tone' | 'multi-color'>('outline');
    const [strokeLinecap,setStrokeLinecap] = useState<'butt' | 'round' | 'square'>('round');
    const [strokeLinejoin,setStrokeLinejoin] = useState<'miter' | 'round' | 'bevel'>('round');
    const [color,setColor] = useState<string[]>(['333333','2F88FF','FFFFFF','43CCF8']);

    const renderColor = useMemo(() => {
        if (theme === 'outline' || theme === 'filled') {
            return <FormItemColor value={ color[0] } onValueChange={ v => setColor((c) => { c[0] = v;  return [...c]; })} label = {theme === 'outline' ? '边线颜色' : '填充颜色'}/>
        }
        if (theme === 'two-tone') {
            return (<>
                <FormItemColor value={ color[0] } onValueChange={ v => setColor((c) => { c[0] = v;  return [...c]; })} label = '边线颜色'/>
                <FormItemColor value={ color[1] } onValueChange={ v => setColor((c) => { c[1] = v;  return [...c]; })} label = '填充颜色'/>
            </>)
        }
        if (theme === 'multi-color') {
            return (<>
                <FormItemColor value={ color[0] } onValueChange={ v => setColor((c) => { c[0] = v;  return [...c]; })} label = '外边线颜色'/>
                <FormItemColor value={ color[1] } onValueChange={ v => setColor((c) => { c[1] = v;  return [...c]; })} label = '外填充颜色'/>
                <FormItemColor value={ color[2] } onValueChange={ v => setColor((c) => { c[2] = v;  return [...c]; })} label = '内边线颜色'/>
                <FormItemColor value={ color[3] } onValueChange={ v => setColor((c) => { c[3] = v;  return [...c]; })} label = '内填充颜色'/>
            </>)
        }
    }, [theme, color])
    
    const fill = useMemo(() => {
        if (theme === 'outline' || theme === 'filled') {
            return `#${color[0]}`;
        }
        if (theme === 'two-tone') {
            return color.slice(0,2).map(item => `#${item}`);
        }
        if (theme === 'multi-color') {
            return color.map(item => `#${item}`);
        }
    }, [theme, color])

    const componentToString = useCallback((type: string) => {
        const params = { fill, theme, size } as any;
        if(strokeLinecap !== 'round') params['strokeLinecap'] = strokeLinecap;
        if(strokeLinejoin !== 'round') params['strokeLinejoin'] = strokeLinejoin;
        if(strokeWidth !== 4) params['strokeWidth'] = strokeWidth;
        if(type === 'react') return `<${info?.componentName}${obj2str(params)} />`
        if(type === 'vue') return `<${info?.name}${obj2str(params)} />`
        if(type === 'svg') return `<?xml version="1.0" encoding="UTF-8"?> ${info?.svg}`;
    }, [ size, fill, theme, strokeWidth, strokeLinecap, strokeLinejoin ])

    const copyHandle = useCallback((type: string) => {
        const str = componentToString(type) || '';
        copyCode(str);
        if(type === 'svg'){
            message.success('复制成功');
        }else{
            message.success(`复制成功 ：${str}`);
        }
    }, [componentToString])
    const footerBtn = useMemo(() => {
        return <>
            <Button type="primary" className={styles.btn} onClick={() => copyHandle('react')}>复制React</Button>
            <Button className={styles.btn} onClick={() => copyHandle('vue')}>复制Vue</Button>
            <Button className={styles.btn} onClick={() => copyHandle('svg')}>复制Svg</Button>
            <Button onClick={() => downloadSvg(info?.svg,`${info?.name}.svg`)}>下载Svg</Button>
        </>
    }, [copyHandle])
    

    return (
        <Modal 
            width={600}
            visible={visible}
            onCancel={() => onValueChange(false)}
            maskClosable={false}
            cancelText={null}
            okText={null}
            footer={null}
            destroyOnClose={true}
        >
            <div className={styles.iconWrapper}>
                { info?.component({
                    size,
                    strokeWidth,
                    strokeLinecap,
                    strokeLinejoin,
                    theme,
                    fill
                })}
            </div>
            <div className={styles.functional}>
                <div className={styles.colors}>
                    { renderColor }
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
            <div className={styles.footer}>{ footerBtn }</div>
        </Modal>
    )
}