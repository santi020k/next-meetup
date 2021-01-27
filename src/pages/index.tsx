// Libs
import { ReactElement, useState } from 'react'
import { Card, Avatar } from 'antd'
// import axios from 'axios'

const { Meta } = Card

const Index = (): ReactElement => {
  const [isLoading] = useState(false)
  return (
    <>
      <Card style={{ width: 300, marginTop: 16 }} loading={isLoading}>
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Card title"
          description="This is the description"
        />
      </Card>
    </>
  )
}

export default Index
