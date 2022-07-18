import React from "react";
import { IconProps } from './AllIcon';
import { Modal, Select, InputNumber , Form } from "antd";
import styles from './index.module.less';
import "./index.less";

interface IProps {
    visible: boolean;
    info?: IconProps;
    onValueChange: (v: boolean) => void;
}

export default function DownloadModal (props: IProps) {
    const { visible, info, onValueChange } = props;
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
                { info?.component }
            </div>
            <div className={styles.functional}>
                <div className={styles.colors}>调色板</div>
                <div className={styles.handle}>
                    <Form.Item label={"size"}><InputNumber /></Form.Item>
                    <Form.Item label={"theme"}>theme</Form.Item>
                    <Form.Item label={"strokeWidth"}><InputNumber /></Form.Item>
                    <Form.Item label={"strokeLinejoin"}>strokeLinejoin</Form.Item>
                    <Form.Item label={"strokeLinecap"}>strokeLinecap</Form.Item>
                </div>
            </div>
        </Modal>
    )
}