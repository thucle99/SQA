import React, { useEffect } from "react"
import { connect, ConnectedProps } from "react-redux"
import { Popconfirm, message, Button } from "antd"
import { QuestionCircleOutlined } from "@ant-design/icons"
import MainLayout from "src/layouts/MainLayout"
import {
  getCourseList,
  getRoomList,
  getRegistrationList,
  registerRoom,
  updateRoom,
  deleteRoom
} from "./CourseRegister.thunks"
import { checkExitRoom, checkDisable } from "./handleFunction"
import * as actions from "./CourseRegister.action"
import styles from "./CourseRegister.module.scss"

const mapStateToProps = (state: AppState) => ({
  courseList: state.courseList.Course,
  roomList: state.courseList.Room,
  roomRegister: state.courseList.RoomRegister,
  registeredRoom: state.courseList.RegisteredRoom,
  roomDelete: state.courseList.RoomDelete
})

const mapDispatchToProps = {
  getCourseList,
  getRoomList,
  getRegistrationList,
  registerRoom,
  updateRoom,
  deleteRoom,
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
    deleteRoom,
    selectRoomDelete,
    courseList,
    roomList,
    roomRegister,
    registeredRoom,
    roomDelete
  } = props

  useEffect(() => {
    getCourseList()
    getRegistrationList()
  }, [getCourseList])
  const handleSaveRoom = data => {
    registeredRoom[0] ? updateRoom(data) : registerRoom(data)
  }
  const handleDeleteRoom = data => {
    deleteRoom(data)
  }

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
                  <th></th>
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
                    <td>
                      <input
                        type="checkbox"
                        checked={item.isDelete}
                        onChange={() => {
                          selectRoomDelete(item)
                        }}
                      />
                    </td>
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
            cancelText="Hủy"
          >
            {/* <Button disabled={roomRegister==registeredRoom 
                || roomDelete.length!=0 ? true:false}>
                Lưu đăng ký
                </Button> */}
                 <Button disabled={checkDisable(roomRegister,registeredRoom,roomDelete)}>
                Lưu đăng ký
                </Button>
          </Popconfirm>

          <Popconfirm
            placement="topRight"
            title="Bạn có chắc muốn xóa môn học không？"
            okText="Xóa"
            cancelText="Hủy"
            onConfirm={() => handleDeleteRoom(roomDelete)}
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
          >
            <Button disabled={roomDelete.length==0 ? true:false}>Xóa</Button>
          </Popconfirm>
        </div>
      </div>
    </MainLayout>
  )
}

export default connector(CourseRegister)
