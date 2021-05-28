import React, { useEffect } from "react"
import { Table, Button, Row } from "antd"
import { connect, ConnectedProps } from "react-redux"
import MainLayout from "src/layouts/MainLayout"
import TableRow from "src/pages/Schedule/TableRow/TableRow"
import { getRegistrationList } from "./Schedule.thunks"
import styles from "./Schedule.module.scss"

const mapStateToProps = (state: AppState) => ({
  registeredRoom: state.schedule.RegisteredRoom,
  LessonOne: state.schedule.LessonOne,
  LessonThree: state.schedule.LessonThree,
  LessonFive: state.schedule.LessonFive,
  LessonSeven: state.schedule.LessonSeven
})

const mapDispatchToProps = {
  getRegistrationList
}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector> {}
const Schedule = (props: Props) => {
  const {
    getRegistrationList,
    registeredRoom,
    LessonOne,
    LessonThree,
    LessonFive,
    LessonSeven
  } = props
  useEffect(() => {
    // getRegistrationList()
  }, [getRegistrationList])
  return (
    <MainLayout>
      <div className={styles.content}>
        <p className={styles.title}>Thông tin thời khóa biểu</p>
        <table>
          <thead>
            <tr>
              <td></td>
              <td>THỨ HAI</td>
              <td>THỨ BA</td>
              <td>THỨ TƯ</td>
              <td>THỨ NĂM</td>
              <td>THỨ SÁU</td>
              <td>THỨ BẢY</td>
              <td>CHỦ NHẬT</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <TableRow title="Tiết 1" lesson={LessonOne} />
            <TableRow title="Tiết 2" lesson={LessonOne} />
            <TableRow title="Tiết 3" lesson={LessonThree} />
            <TableRow title="Tiết 4" lesson={LessonThree} />
            <TableRow title="Tiết 5" lesson={LessonFive} />
            <TableRow title="Tiết 6" lesson={LessonFive} />
            <TableRow title="Tiết 7" lesson={LessonSeven} />
            <TableRow title="Tiết 8" lesson={LessonSeven} />
          </tbody>
          <thead>
            <tr>
              <td></td>
              <td>THỨ HAI</td>
              <td>THỨ BA</td>
              <td>THỨ TƯ</td>
              <td>THỨ NĂM</td>
              <td>THỨ SÁU</td>
              <td>THỨ BẢY</td>
              <td>CHỦ NHẬT</td>
              <td></td>
            </tr>
          </thead>
        </table>
        <div className={styles.group__btn}>
          <Button>Tuần đầu</Button>
          <Button>Tuần trước</Button>
          <Button>Tuần kế</Button>
          <Button>Tuần cuối</Button>
        </div>
      </div>
    </MainLayout>
  )
}

export default connector(Schedule)
