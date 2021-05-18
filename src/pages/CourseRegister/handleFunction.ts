export const checkExitRoom = (arr: any, room: any): boolean => {
  let check = false
  arr.map(item => {
    if (item.id == room.id) check = true
  })
  return check
}
