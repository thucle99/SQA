import React from "react"
import { Table, Button, Row } from "antd"
import { connect, ConnectedProps } from "react-redux"
import MainLayout from "src/layouts/MainLayout"
import TableRow from "src/pages/Schedule/TableRow/TableRow"
import "./Schedule.module.scss"

const mapStateToProps = (state: AppState) => ({})

const mapDispatchToProps = {}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector> {}
const Schedule = (props: Props) => {
  const {} = props
  return (
    <div>
      <MainLayout>he</MainLayout>
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
          <TableRow title="Tiết 1" />
          <TableRow title="Tiết 2" />
          <TableRow title="Tiết 3" />
          <TableRow title="Tiết 4" />
          <TableRow title="Tiết 5" />
          <TableRow title="Tiết 6" />
          <TableRow title="Tiết 7" />
          <TableRow title="Tiết 8" />
          <TableRow title="Tiết 9" />
          <TableRow title="Tiết 10" />
          <TableRow title="Tiết 11" />
          <TableRow title="Tiết 12" />
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
      <div className="group__btn">
        <Button>Tuần đầu</Button>
        <Button>Tuần trước</Button>
        <Button>Tuần kế</Button>
        <Button>Tuần cuối</Button>
      </div>
    </div>
  )
}

export default connector(Schedule)
