import React, { useEffect } from "react"
import { Table, Button, Row } from "antd"
import { connect, ConnectedProps } from "react-redux"
import MainLayout from "src/layouts/MainLayout"
import TableRow from "src/pages/Schedule/TableRow/TableRow"
import { getRegistrationList } from "./Schedule.thunks"
import * as actions from "./Schedule.action"
import styles from "./Schedule.module.scss"

const mapStateToProps = (state: AppState) => ({
  registeredRoom: state.schedule.RegisteredRoom,
  page: state.schedule.page,
  LessonOne: state.schedule.LessonOne,
  LessonThree: state.schedule.LessonThree,
  LessonFive: state.schedule.LessonFive,
  LessonSeven: state.schedule.LessonSeven
})

const mapDispatchToProps = {
  getRegistrationList,
  firstSchedule: (payload: number) => dispatch => {
    return dispatch(actions.firstSchedule(payload))
  },
  backSchedule: (payload: number) => dispatch => {
    return dispatch(actions.backSchedule(payload))
  },
  nextSchedule: (payload: number) => dispatch => {
    return dispatch(actions.nextSchedule(payload))
  },
  endSchedule: (payload: number) => dispatch => {
    return dispatch(actions.endSchedule(payload))
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector> {}
const Schedule = (props: Props) => {
  const {
    getRegistrationList,
    page,
    LessonOne,
    LessonThree,
    LessonFive,
    LessonSeven,
    firstSchedule,
    backSchedule,
    nextSchedule,
    endSchedule
  } = props
  useEffect(() => {
    getRegistrationList()
  }, [getRegistrationList])
  return (
    <MainLayout>
      <div className={styles.content}>
        <div className={styles.header__schedule}>
          <p className={styles.title}>Thông tin thời khóa biểu</p>
          <p className={styles.page}>Tuần :{page}</p>
        </div>
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
          <Button onClick={() => firstSchedule(page)}>Tuần đầu</Button>
          <Button
            disabled={page == 1 ? true : false}
            onClick={() => backSchedule(page)}
          >
            Tuần trước
          </Button>
          <Button
            onClick={() => nextSchedule(page)}
            disabled={page == 16 ? true : false}
          >
            Tuần kế
          </Button>
          <Button onClick={() => endSchedule(page)}>Tuần cuối</Button>
        </div>
      </div>
    </MainLayout>
  )
}

export default connector(Schedule)
