import styles from "./TableRow.module.scss"
export default function TableRow(props) {
  const { lesson } = props

  return (
    <tr>
      <td>{props.title}</td>
      {lesson[2] && (
        <td className={lesson[2].id ? styles.active : ""}>{lesson[2].ten}</td>
      )}
      {lesson[3] && (
        <td className={lesson[3].id ? styles.active : ""}>{lesson[3].ten}</td>
      )}
      {lesson[4] && (
        <td className={lesson[4].id ? styles.active : ""}>{lesson[4].ten}</td>
      )}
      {lesson[5] && (
        <td className={lesson[5].id ? styles.active : ""}>{lesson[5].ten}</td>
      )}
      {lesson[6] && (
        <td className={lesson[6].id ? styles.active : ""}>{lesson[6].ten}</td>
      )}
      {lesson[7] && (
        <td className={lesson[7].id ? styles.active : ""}>{lesson[7].ten}</td>
      )}
      <td></td>
      <td></td>
      <td>{props.title}</td>
    </tr>
  )
}
