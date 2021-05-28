import React, { useEffect } from "react"
import "./TableRow.module.scss"
export default function TableRow(props) {
  const { lesson } = props
  // const a=lesson.filter( (obj) => {
  //   obj.ngayHoc[0]===1
  // }
  // )
  // for(let i=0;i<lesson.length;i++){
  //   console.log("lesson[i].ngayHoc[0]",lesson[i].ngayHoc[0]);

  // }
  useEffect(() => {
    console.log("a lesson", lesson[2])
  })

  return (
    <tr>
      <td>{props.title}</td>
      {lesson[2] && <td>{lesson[2].ten}</td>}
      {lesson[3] && <td>{lesson[3].ten}</td>}
      {lesson[4] && <td>{lesson[4].ten}</td>}
      {lesson[5] && <td>{lesson[5].ten}</td>}
      {lesson[6] && <td>{lesson[6].ten}</td>}
      {lesson[7] && <td>{lesson[7].ten}</td>}
      <td></td>
      <td></td>
      <td>{props.title}</td>
    </tr>
  )
}
