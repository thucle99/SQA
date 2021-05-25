import { Layout } from "antd"
import React, { ReactNode } from "react"
import Navigation from "src/components/Header/Navigation"
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
      <Layout>
        <Header className={styles.formHeader}>
          <Navigation />
        </Header>
        <Layout>{children}</Layout>
        <Footer style={{ textAlign: "center" }}>
          Copyright ©2021 Cơ Sở Miền Bắc
        </Footer>
      </Layout>
    </div>
  )
}
