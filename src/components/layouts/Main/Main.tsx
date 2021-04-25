// Libs
import { useState, memo, ReactElement } from 'react'
import { Layout, Menu, Dropdown } from 'antd'
import Image from 'next/image'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  SettingOutlined,
  DashboardOutlined,
  DownOutlined,
  UserOutlined
} from '@ant-design/icons'
import { useRouter } from 'next/router'

// Components
import { AutoComplete } from 'components/atoms'
// Styled
import { MainContainer, Content, Toggle, Logo, MenuContainer, Footer, Header, User, Hr, Avatar, RightHeader, DropdownContent } from './Main.styled'

const { Item } = Menu
const { Sider } = Layout

const MainLayout = ({ children }: { children: ReactElement }): ReactElement => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [selectedKeys, setSelectedKeys] = useState(['index'])
  const router = useRouter()

  const toggle = (): void => { setIsCollapsed(prevState => !prevState) }

  const handleSelectedItem = async (key: string): Promise<void> => {
    setSelectedKeys([key])
    const path: string = key === 'index' ? '' : key
    await router.push(`/${path}`)
  }

  return (
    <MainContainer>
      <Sider trigger={null} collapsible collapsed={isCollapsed}>
        <Toggle>
          {isCollapsed ? <MenuUnfoldOutlined onClick={toggle} /> : <MenuFoldOutlined onClick={toggle} />}
        </Toggle>
        <MenuContainer theme="dark" mode="inline" selectedKeys={selectedKeys} full="true">
          <Item key="index" icon={<SearchOutlined />} onClick={async () => { await handleSelectedItem('index') }}>
            Search
          </Item>
          <Item key="Opportunity" icon={<UserOutlined />} onClick={async () => { await handleSelectedItem('gnome') }}>
            Opportunity
          </Item>
          <Item key="data" icon={<DashboardOutlined />} onClick={async () => { await handleSelectedItem('data') }}>
            Data analysis
          </Item>
        </MenuContainer>
        <Footer>
          <MenuContainer theme="dark" mode="inline" selectedKeys={selectedKeys}>
            <Item key="config" icon={<SettingOutlined />} onClick={async () => { await handleSelectedItem('config') }}>
              Config
            </Item>
          </MenuContainer>
        </Footer>
      </Sider>
      <Layout>
        <Header>
          <Logo><Image src="/img/logo.svg" alt="me" width="64" height="64" /></Logo>
          <RightHeader>
            <AutoComplete />
            <Hr />
            <Dropdown
              overlay={
                <Menu onClick={() => console.log('click')}>
                  <Menu.Item key="1" icon={<UserOutlined />}>
                    Coming soon
                  </Menu.Item>
                  <Menu.Item key="2" icon={<UserOutlined />}>
                    Coming soon
                  </Menu.Item>
                  <Menu.Item key="3" icon={<UserOutlined />}>
                    Coming soon
                  </Menu.Item>
                </Menu>
              }
              placement="topRight"
              arrow
            >
              <DropdownContent>
                <Avatar />
                <User>
                  Santiago Molina
                </User>
                <DownOutlined />
              </DropdownContent>
            </Dropdown>
          </RightHeader>
        </Header>
        <Content>
          {children}
        </Content>
      </Layout>
    </MainContainer>
  )
}

export default memo(MainLayout)
