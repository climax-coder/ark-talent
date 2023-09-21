import React, { ReactNode } from 'react'
import { Divider, Avatar, Space } from 'antd';
import { CommentOutlined, UserOutlined } from '@ant-design/icons';

function ChartContainer({children} : { children : ReactNode}) {
  return (
    <div>
      <h2>Chart Title</h2>
      <Divider />
        {children}
      <Divider />
      <div className='flex flex-row justify-between items-center'>
        <div>
          <Avatar size="small" icon={<UserOutlined />} />
        </div>
        <div className='opacity-30'>
          <Space size={3}>
            <span>3</span>
            <CommentOutlined />
          </Space>
        </div>
      </div>
    </div>
  )
}

export default ChartContainer