// Libs
import styled from 'styled-components'
import { Layout, Menu } from 'antd'

const MainContainer = styled(Layout)`
  height: 100vh;
`

const Content = styled(Layout.Content)`
  background: #fff;
  margin: 24px 16px;
  padding: 24px;
  min-height: 280px;
`

const Toggle = styled(Layout.Header)`
  padding-left: 2rem;
  margin: .4rem 0;
  & > span {
    font-size: 18px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #01579b;
    }
  }
`

const Header = styled(Layout.Header)`
  background: #fff;
  padding: 0 24px;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Footer = styled(Layout.Footer)``

const Logo = styled.div`
  height: 64px;
`

const User = styled.div`
  margin-right: 1rem;
`

const Avatar = styled.div`
  height: 40px;
  width: 40px;
  background: #ccc;
  border-radius: 100%;
  margin-right: 1rem;
`

const Hr = styled.hr`
  height: 30px;
  margin: 0 1rem 0 2rem;
  border: #ccc 0.5px solid;
`

const RightHeader = styled.div`
  display: none;
  @media ${({ theme }) => theme.device.md} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const DropdownContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const MenuContainer = styled(Menu)`
  ${({ full }: { full: boolean }) => full && 'height: calc(100% - 8rem)'};
  &.ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) {
    & > li {
      margin: .5rem;
      width: calc( 100% - 1rem);
      display: block;
      & > span {
        color: #040505;
      }
    }
    & > li.ant-menu-item-selected {
      background: rgba(147, 147, 147, 0.12);
    }
  }

  &.ant-menu-dark.ant-menu-inline-collapsed.ant-menu-dark:not(.ant-menu-horizontal) > li {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export { MainContainer, Content, Logo, Toggle, MenuContainer, Footer, Header, User, Avatar, Hr, RightHeader, DropdownContent }
