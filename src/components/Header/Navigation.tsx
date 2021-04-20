import { DownOutlined } from "@ant-design/icons"
import { Avatar, Dropdown, Image, Menu, Space } from "antd"
import React, { useEffect } from "react"
import { connect, ConnectedProps } from "react-redux"
import { useHistory } from "react-router-dom"
import { logout } from "src/App/App.actions"
import { PATH } from "src/constants/paths"
import styles from "./Navigation.module.scss"

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  logout
}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector> {}

const Navigation = (props: Props) => {
  const { logout } = props
  const history = useHistory()
  const handleLogout = () => {
    logout()
    history.push(PATH.LOGIN)
  }
  useEffect(() => {}, [history])

  const menu = (
    <Menu>
      <Menu.Item key="3">
        <a onClick={() => handleLogout()}>Đăng xuất</a>
      </Menu.Item>
      <Menu.Item key="4">
        <a>Cài đặt</a>
      </Menu.Item>
    </Menu>
  )

  return (
    <div className={styles.menu}>
      <a className={styles.logo} href="/">
        <Image width={40} preview={false} alt="PTIT" src="./logo.jpg" />
      </a>
      <Menu mode="horizontal">
        <Menu.Item key="item1" className={styles.menuItem}>
          <a href="/"> Trang chủ</a>
        </Menu.Item>
        <Menu.Item key="item2" className={styles.menuItem}>
          <a href="/courseRegister"> Đăng ký môn học</a>
        </Menu.Item>
        <Menu.Item key="item3" className={styles.menuItem}>
          Xem thời khóa biểu
        </Menu.Item>
        <Menu.Item key="item4" className={styles.menuItem}>
          Xem lịch giảng dạy
        </Menu.Item>
        <Menu.Item key="item5" className={styles.menuItem}>
          Sửa thông tin cá nhân
        </Menu.Item>
        <Menu.Item key="item6" className={styles.menuItem}>
          Góp ý kiến
        </Menu.Item>
      </Menu>
      <Dropdown overlay={menu} trigger={["click"]} className={styles.profile}>
        <Space>
          <Avatar
            size={40}
            src="./JeffBezos.jpg"
            className={styles.avatarNavbar}
            alt="Avatar"
          />
          <DownOutlined className={styles.iconExit} />
        </Space>
      </Dropdown>
    </div>
  )
}

export default connector(Navigation)