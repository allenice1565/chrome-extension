import { Menu } from '@mantine/core'
import { createRoot } from 'react-dom/client'
import React from 'react'
import { IconSettings } from '@tabler/icons-react'
import sendMsg from '@utils/message-passing'

function Popup() {
    return (
        <>
            <Menu shadow="md" width={200}>
                <Menu.Label>常用账号切换</Menu.Label>
                <Menu.Item>test000000080</Menu.Item>
                <Menu.Item>test000000081</Menu.Item>
                <Menu.Divider />
                <Menu.Label>设置</Menu.Label>
                <Menu.Item
                    icon={<IconSettings size={14} />}
                    onClick={() =>
                        sendMsg('goToPage', 'backend-management.html')
                    }
                >
                    配置助手
                </Menu.Item>
            </Menu>
        </>
    )
}

const div = document.createElement('div')
document.body.appendChild(div)
div.setAttribute('id', 'developerAssistant')

const root = createRoot(div)
root.render(<Popup></Popup>)
