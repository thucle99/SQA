export const checkExitRoom = (arr: any, room: any): boolean => {
  let check = false
  arr.map(item => {
    if (item.id === room.id) check = true
  })
  return check
}

const checkDelete = (roomRegister, registeredRoom) => {
  let check = false
  if (roomRegister.length !== registeredRoom.length) {
    check = false
  } else {
    for (let i = 0; i < roomRegister.length; i++) {
      if (roomRegister[i].id === registeredRoom[i].id) check = true
    }
  }
  return check
}

export const checkDisable = (roomRegister: any, registeredRoom: any): any => {
  if (checkDelete(roomRegister, registeredRoom)) return true // hiện click
  return false
}

export const checkUpdateData = (dataUpdate: any, RegisteredRoom: any): any => {
  const dataDisable: any = []

  if (dataUpdate.length > RegisteredRoom.length) {
    for (let i = 0; i < dataUpdate.length; i++) {
      for (let j = 0; j < RegisteredRoom.length; j++) {
        if (dataUpdate[i].id !== RegisteredRoom[j].id) {
          dataDisable.push(dataUpdate[i])
        }
      }
    }
  } else {
    for (let i = 0; i < RegisteredRoom.length; i++) {
      for (let j = 0; j < dataUpdate.length; j++) {
        if (RegisteredRoom[i].id !== dataUpdate[j].id) {
          dataDisable.push(RegisteredRoom[i])
        }
      }
    }
  }
  return dataDisable
}

export const checkSchedule = (roomRegister: any, arr: any): boolean => {
  let checkSchedule = false
  roomRegister.map(item => {
    if (
      item.ngayHoc[0] === arr.ngayHoc[0] &&
      item.kipHoc[0] === arr.kipHoc[0] &&
      item.id != arr.id
    )
      checkSchedule = true
  })
  return checkSchedule
}
