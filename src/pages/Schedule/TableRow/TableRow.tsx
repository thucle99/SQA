import "./TableRow.module.scss"
export default function TableRow(props) {
  const { lesson } = props
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
