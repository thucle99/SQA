import { Button, notification, Popconfirm } from "antd"
import React, { useEffect } from "react"
import { connect, ConnectedProps } from "react-redux"
import MainLayout from "src/layouts/MainLayout"
import * as actions from "./CourseRegister.action"
import styles from "./CourseRegister.module.scss"
import {
  getCourseList,
  getRegistrationList,
  getRoomList,
  registerRoom,
  updateRoom
} from "./CourseRegister.thunks"
import { checkDisable, checkExitRoom } from "./handleFunction"

const mapStateToProps = (state: AppState) => ({
  courseList: state.courseList.Course,
  roomList: state.courseList.Room,
  roomRegister: state.courseList.RoomRegister,
  registeredRoom: state.courseList.RegisteredRoom,
  messageSuccess: state.courseList.messageSuccess
})

const mapDispatchToProps = {
  getCourseList,
  getRoomList,
  getRegistrationList,
  registerRoom,
  updateRoom,
  selectRoom: (payload: Room) => dispatch => {
    return dispatch(actions.selectRoom(payload))
  },
  selectRoomDelete: (payload: Room) => dispatch => {
    return dispatch(actions.selectRoomDelete(payload))
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector> {}
const CourseRegister = (props: Props) => {
  const {
    getCourseList,
    getRoomList,
    getRegistrationList,
    selectRoom,
    registerRoom,
    updateRoom,
    courseList,
    roomList,
    roomRegister,
    registeredRoom,
    messageSuccess
  } = props
  const messageDefault = "Cập nhật danh sách lớp học phần thành công"

  const openNotification = placement => {
    notification.success({
      message: messageSuccess ? messageSuccess : messageDefault,
      placement
    })
  }

  const handleSaveRoom = data => {
    registeredRoom[0]
      ? updateRoom(data).then(() => openNotification("bottomLeft"))
      : registerRoom(data).then(() => openNotification("bottomLeft"))
  }

  useEffect(() => {
    getCourseList()
    getRegistrationList()
  }, [getCourseList])

  return (
    <MainLayout>
      <div className={styles.content}>
        <div className={styles.listSubject}>
          <p className={styles.title}>Danh sách môn học</p>
          <div className={styles.tableSubject}>
            {courseList.map((item, index) => (
              <button
                autoFocus={item.id == 1 ? true : false}
                type="button"
                className={styles.subject}
                key={index}
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  event.preventDefault()
                  getRoomList(item.id)
                }}
              >
                {item.ten}
              </button>
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
                <tr
                  key={index}
                  className={
                    checkExitRoom(roomRegister, item) ? styles.isRegister : ""
                  }
                >
                  <td>
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => {
                        selectRoom(item)
                      }}
                      disabled={
                        checkExitRoom(registeredRoom, item) ? false : item.daDK
                      }
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
                    <td></td>
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
          <Popconfirm
            placement="topRight"
            title="Bạn có chắc muốn lưu đăng ký không"
            onConfirm={() => handleSaveRoom(roomRegister)}
            okText="Lưu"
            disabled={checkDisable(roomRegister, registeredRoom)}
            cancelText="Hủy"
          >
            <Button disabled={checkDisable(roomRegister, registeredRoom)}>
              Lưu đăng ký
            </Button>
          </Popconfirm>
        </div>
      </div>
    </MainLayout>
  )
}

export default connector(CourseRegister)
