import React from "react"
import { connect, ConnectedProps } from "react-redux"
import MainLayout from "src/layouts/MainLayout"
import styles from "./Schedule.module.scss"

const mapStateToProps = (state: AppState) => ({})

const mapDispatchToProps = {}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector> {}
const Schedule = (props: Props) => {
  const {} = props

  return (
    <MainLayout>
      <div className={styles.content}>
        <p>chao anh em</p>
      </div>
    </MainLayout>
  )
}

export default connector(Schedule)
