import React, { useState, useEffect } from "react"
import { connect, ConnectedProps } from "react-redux"
import MainLayout from "src/layouts/MainLayout"
import styles from "./CourseRegister.module.scss"
import { getCourseList } from "./CourseRegister.thunks"
import { getScheduleApi } from "../../apis/schedule.api"

const mapStateToProps = (state: AppState) => ({
  courseList: state.courseList.Course
})

const mapDispatchToProps = {
  getCourseList
}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector> {}
const CourseRegister = (props: Props) => {
  const { getCourseList, courseList } = props
  const [listSchedule, setListSchedule] = useState<Room[] | []>([])
  const schedule = id => {
    getScheduleApi(id).then(res => {
      setListSchedule(res.data)
      console.log("res", res.data)
    })
  }
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
                  schedule(item.id)
                }}
              >
                {item.ten}
              </p>
            ))}
          </div>
        </div>

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
                <th> Tuần</th>
              </tr>
            </thead>
            <tbody>
              {listSchedule.map((item, index) => (
                <tr className={styles.td} key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{item.id}</td>
                  <td>{item.ten}</td>
                  <td>{item.nhomTH}</td>
                  <td>{item.soTC}</td>
                  <td>{item.kipHoc}</td>
                  <td>{item.phong}</td>
                  <td>{item.ngayHoc}</td>
                  <td>{item.tuanHoc}</td>
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
                  <th>Mã môn học</th>
                  <th>Tên môn học</th>
                  <th>Nhóm môn học</th>
                  <th>Số tín chỉ</th>
                  <th>Mã lớp</th>
                  <th>Thứ</th>
                  <th>Tiết bắt đầu</th>
                  <th> Tuần</th>
                </tr>
              </thead>
              <tbody>
                {courseList.map((item, index) => (
                  <tr className={styles.td} key={index}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>0001</td>
                    <td>03</td>
                    <td>03</td>
                    <td>03</td>
                    <td>B17dccn594</td>
                    <td>thứ 6</td>
                    <td>tiết 4</td>
                    <td>tuần 3</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default connector(CourseRegister)
