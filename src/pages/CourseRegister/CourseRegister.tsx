import React, { useEffect } from "react"
import { connect, ConnectedProps } from "react-redux"
import MainLayout from "src/layouts/MainLayout"
import * as actions from "./CourseRegister.action"
import styles from "./CourseRegister.module.scss"
import {
  getCourseList,
  getRoomList,
  registerRoom
} from "./CourseRegister.thunks"

const mapStateToProps = (state: AppState) => ({
  courseList: state.courseList.Course,
  roomList: state.courseList.Room,
  roomRegister: state.courseList.RoomRegister
})

const mapDispatchToProps = {
  getCourseList,
  getRoomList,
  registerRoom,
  selectRoom: (payload: Room) => dispatch => {
    return dispatch(actions.selectRoom(payload))
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector> {}
const CourseRegister = (props: Props) => {
  const {
    getCourseList,
    getRoomList,
    selectRoom,
    registerRoom,
    courseList,
    roomList,
    roomRegister
  } = props

  useEffect(() => {
    getCourseList()
  }, [getCourseList])

  return (
    <MainLayout>
      <div className={styles.content}>
        <div className={styles.listSubject}>
          <p className={styles.title}>Danh sách môn học</p>
          <div className={styles.tableSubject}>
            {courseList.map((item, index) => (
              <p
                className={styles.subject}
                key={index}
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  event.preventDefault()
                  getRoomList(item.id)
                }}
              >
                {item.ten}
              </p>
            ))}
          </div>
        </div>

        <p className={styles.titleRegister}>Danh sách lớp học</p>
        <div className={styles.listRoom}>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Id</th>
                <th>Tên môn học</th>
                <th>Nhóm thực hành</th>
                <th>Số tín chỉ</th>
                <th>Kíp học</th>
                <th>Phòng học</th>
                <th>Thứ</th>
                <th>Tuần</th>
              </tr>
            </thead>
            <tbody>
              {roomList.map((item, index) => (
                <tr className={styles.td} key={index}>
                  <td>
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => {
                        selectRoom(item)
                      }}
                      disabled={item.daDK}
                    />
                  </td>
                  <td>{item.id}</td>
                  <td>{item.ten}</td>
                  <td>{item.nhomTH}</td>
                  <td>{item.soTC}</td>
                  <td>{item.kipHoc.toString()}</td>
                  <td>{item.phong}</td>
                  <td>{item.ngayHoc}</td>
                  <td>{item.tuanHoc.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={styles.titleRegister}>Danh sách môn học đã đăng ký</p>
        <div className={styles.listRoom}>
          <div className={styles.tableRegister}>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Id</th>
                  <th>Tên môn học</th>
                  <th>Nhóm thực hành</th>
                  <th>Số tín chỉ</th>
                  <th>Kíp học</th>
                  <th>Phòng học</th>
                  <th>Thứ</th>
                  <th>Tuần</th>
                </tr>
              </thead>
              <tbody>
                {roomRegister.map((item, index) => (
                  <tr className={styles.td} key={index}>
                    <td>
                      <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => {
                          selectRoom(item)
                        }}
                        disabled={item.daDK}
                      />
                    </td>
                    <td>{item.id}</td>
                    <td>{item.ten}</td>
                    <td>{item.nhomTH}</td>
                    <td>{item.soTC}</td>
                    <td>{item.kipHoc.toString()}</td>
                    <td>{item.phong}</td>
                    <td>{item.ngayHoc}</td>
                    <td>{item.tuanHoc.toString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.action}>
          <button onClick={() => registerRoom(roomRegister)}>
            Lưu đăng ký
          </button>
          <button>Xóa</button>
        </div>
      </div>
    </MainLayout>
  )
}

export default connector(CourseRegister)
