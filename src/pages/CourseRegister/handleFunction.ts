export const checkExitRoom = (arr: any, room: any): boolean => {
  let check = false
  arr.map(item => {
    if (item.id == room.id) check = true
  })
  return check
}


const checkDelete = (roomRegister,registeredRoom) => {
  let check=false;
  if(roomRegister.length!=registeredRoom.length){
    check=false;
  }
  else{
    for(let i=0;i<roomRegister.length;i++){
      if(roomRegister[i].id==registeredRoom[i].id) check=true
    }
  }
  return check;
}

export const checkDisable = (
  roomRegister: any,
  registeredRoom: any,
  roomDelete: any
): any => {
  if (
    checkDelete(roomRegister,registeredRoom) 
  )
    return true   // hiện click
  return  false
}
