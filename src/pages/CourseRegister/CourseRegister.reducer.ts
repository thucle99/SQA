import * as types from "./CourseRegister.constants"
import produce from "immer"

const initialState = {
  loading: false,
  Course: [] as Course[],
  Room: [] as Room[], // list room
  RoomRegister: [] as Room[], // list room selected
  RegisteredRoom: [] as Room[], // list room is registered
  RoomDelete: [] as Room[],  // Room xóa
  RoomAfterDelete: [] as Room[]  // Room còn lại
}

export const CourseListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.GET_COURSE_REQUESTED:
        draft.loading = true
        break
      case types.GET_COURSE_SUCCESS:
        draft.loading = false
        draft.Course = action.payload
        break

      case types.GET_ROOM_REQUESTED:
        draft.loading = true
        draft.Room = []
        break
      case types.GET_ROOM_SUCCESS:
        draft.loading = false
        draft.Room = action.payload.map(item => {
          item.isDelete = false
          if (state.RoomRegister.some(obj => obj.id === item.id)) {
            item.checked = true
          } else item.checked = false
          return item
        })
        break
      // check id trùng trong roon chọn thì check=true( check mảng trong mảng)

      case types.REGISTRATION_LIST_ROOM_REQUESTED:
        draft.loading = true
        draft.RoomRegister = []
        draft.RegisteredRoom = []
        break
      case types.REGISTRATION_LIS_ROOM_SUCCESS:
        const dataRegistration = action.payload.map(item => {
          item.checked = true
          item.isDelete = false
          return item
        })
        draft.loading = false
        draft.RoomRegister = dataRegistration
        draft.RegisteredRoom = dataRegistration
        break

      case types.SELECT_ROOM:
        let isExits = false
        let data = state.RoomRegister.map(item => {
          // if (item.id === action.payload.id) {
          //   // trùng id
          //   isExits = true
          //   return { ...item, checked: false }
          // } else {
          //   return { ...item, checked: true }
          // }
          if (item.id === action.payload.id) {
            // trùng id
            isExits = true
            return { ...item, checked: !item.checked }
          } else {
            return { ...item}
          }
        })
        // trả về false nếu có tên trong list chọn đăng ký
        if (!isExits) data.push({ ...action.payload, checked: true })
        draft.loading = false
        draft.Room = state.Room.map(item => {
          return item.id === action.payload.id
            ? { ...item, checked: !item.checked}
            : { ...item }
          // bắt sự kiện click trùng tên thì đổi checked
        })
        draft.RoomRegister = data.filter(item => item.checked == true)
        break

      case types.UPDATE_ROOM_REQUESTED:
        draft.loading = true
        break
      case types.UPDATE_ROOM_SUCCESS:
        const dataUpdate=state.RoomRegister.map(item=>{
          return {...item,daDK:true}
        })
        console.log("Room",state.Room);
        console.log("RegisteredRoom",dataUpdate);
        console.log("RoomRegister",dataUpdate);
        
        draft.loading = false
        draft.RegisteredRoom = dataUpdate
        draft.RoomRegister = dataUpdate
        break

      case types.SELECT_ROOM_DELETE:
        let isExitsDelete = false
        let dataDelete = state.RoomRegister.map(item => {
          // if (item.id === action.payload.id) {
          //   // trùng id
          //   isExits = true
          //   return { ...item, checked: false }
          // } else {
          //   return { ...item, checked: true }
          // }
          if (item.id === action.payload.id) {
            // trùng id
            isExitsDelete = true
            return { ...item, isDelete: !item.isDelete }
          } else {
            return { ...item}
          }
        })
        // trả về false nếu có tên trong list chọn đăng ký
        // if (!isExitsDelete) dataDelete.push({ ...action.payload, checked: true })
        console.log("data xóa", dataDelete.filter(item => item.isDelete == true))
        console.log("data còn lại", dataDelete.filter(item => item.isDelete == false))

        // const dataConLai=action.payload.map(item => {
        //   item.isDelete = false
        //   if (state.RoomRegister.some(obj => obj.id === item.id)) {
        //     item.checked = true
        //   } else item.checked = false
        //   return item
        // })
        // const dataDelete = state.RoomRegister.map(item => {
        //   return item.id === action.payload.id
        //     ? { ...item, isDelete:  !item.isDelete }
        //     : { ...item }
        // })
        draft.RoomRegister = dataDelete
        draft.RoomAfterDelete=dataDelete.filter(item => item.isDelete == false)
        draft.RoomDelete =dataDelete.filter(item => item.isDelete == true)
        break

      case types.DELETE_ROOM_REQUESTED:
        draft.loading = true
        break
      case types.DELETE_ROOM_SUCCESS:
        const finalRoomDelete= state.Room.map(item => {
          // item.isDelete = false
          if (state.RoomDelete.some(obj => obj.id === item.id)) {
            return {...item,checked :false,isDelete : !item.isDelete,daDK:false}
          } else  return {...item}
        })
        console.log("Room",finalRoomDelete);
        console.log("RegisteredRoom", state.RoomAfterDelete);
        console.log("RoomRegister", state.RoomAfterDelete);
        // check nếu RoomDelete có trong Room
        console.log("finalRoomDelete",finalRoomDelete )
        draft.loading = false
        draft.RegisteredRoom = state.RoomAfterDelete
        draft.RoomRegister = state.RoomAfterDelete
        draft.Room=finalRoomDelete
        draft.RoomDelete=[]
        draft.RoomAfterDelete=[]
        break

      case types.GET_ITEM_FAILED:
        draft.loading = false
        break
      default:
        return state
    }
  })
