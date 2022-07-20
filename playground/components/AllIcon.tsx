import React, { useEffect, useState } from 'react';
import * as OkeyIcons from 'okey-icon-react';
import IconConfig from 'okey-icon-react/icons.json'
import Download from './download';
import styles from './index.module.less';
import { message } from 'antd';
import DownloadModal from './DownloadModal';
import "antd/dist/antd.css"

export interface IIcon {
    size?: number,
    strokeWidth?: number,
    theme?: 'outline' | 'filled' | 'two-tone' | 'multi-color',
    strokeLinecap?: 'butt' | 'round' | 'square',
    strokeLinejoin?: 'miter' | 'round' | 'bevel',
    fill?: string | string[]
}

export interface IconProps {
    id: number
    title?: string,
    name: string,
    svg: string,
    componentName: string,
    component: (info?: IIcon) => JSX.Element,
}

interface IconInfoProps extends IconProps {
    onClick?: (props: IconProps) => void;
}

function IconInfo (props: IconInfoProps) {
    const [show, setShow] = useState(false);

    const clickHanel = () => {
        props.onClick && props.onClick(props);
        setShow(true);
    } 

    return props.component && (
        <>
            <div className={styles.iconitem}>
                <div className={styles.icon}>
                    { props.component() }
                </div>
                <div className={styles.text}>{props.title}</div>
                <div className={styles.download} onClick={() => clickHanel()}><Download />下载</div>
            </div>
            <DownloadModal visible={show} info={props} onValueChange={(v: boolean) => setShow(v)}/>
        </>
    )
}

const Icons = (props: { name: string , info?: IIcon }) => {
    const {name, info} = props;

    const Icon = (OkeyIcons as any)[`${name}`];

    if(!Icon) {
        return null
    }
    return <Icon size={32} {...info} />
}

export default function IconWrapper () {
    
    const [data, setData] = useState<IconProps[]>([]);

    useEffect(() => {
        const iconList = IconConfig.map(item => {
            return {
                ...item,
                component: (info?: IIcon) => <Icons name={item.componentName} info={info}/>
            }
        })
        setData(iconList);
    }, []);
    
    const downloadIcon = (props: IconProps) => {
        // message.info(props.name);
    }

    return (
        <>
            <div className={styles.container}>
                {
                    data.map(item => {
                        return <IconInfo {...item} key={item.id} onClick={downloadIcon}/>
                    })
                }
            </div>
        </>
    )
}