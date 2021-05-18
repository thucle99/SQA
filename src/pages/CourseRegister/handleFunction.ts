export const checkExitRoom = (arr: any, room: any): boolean => {
  let check = false
  arr.map(item => {
    if (item.id == room.id) check = true
  })
  return check
}

export const checkRoomDelete = (arr: any): Room => {
  const finalArr = arr.filter(item => item.isDelete == false)
  console.log("finalArr", finalArr)

  return finalArr
}
