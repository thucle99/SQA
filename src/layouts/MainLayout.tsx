import React, { ReactNode } from "react"
import Navigation from "src/components/Header/Navigation"
import SideNav from "src/components/SideNav/SideNav"
import { Layout, Space, Affix, Row } from "antd"
import styles from "./MainLayout.module.scss"

interface Props {
  children: ReactNode
}

export default function MainLayout(props: Props) {
  const { children } = props
  const { Header, Footer } = Layout
  return (
    <div
      className="wrapper d-flex align-items-stretch"
      style={{ backgroundColor: "#f0f2f5" }}
    >
      {/* <SideNav /> */}
      {/* <main className="flex-grow-1 mw-100 overflow-auto min-vh-100">
        <Header />
        <div className="content mt-3 p-3">{children}</div>
      </main> */}

      <Layout>
        <Header className={styles.formHeader}>
          <Navigation />
        </Header>
        <Layout>{props.children}</Layout>
        <Footer style={{ textAlign: "center" }}>Design by 105C7</Footer>
      </Layout>
    </div>
  )
}
