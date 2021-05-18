import * as types from "./CourseRegister.constants"
import produce from "immer"

const initialState = {
  loading: false,
  Course: [] as Course[],
  Room: [] as Room[], // list room
  RoomRegister: [] as Room[], // list room selected
  RegisteredRoom: [] as Room[], // list room is registered
  RoomAfterDelete: [] as Room[]
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
          item.isDelete=false;
          if (state.RoomRegister.some(obj => obj.id === item.id)) {
            item.checked = true
          } else item.checked = false
          return item
        })
        break
      // check id trùng trong roon chọn thì check=true

      case types.SELECT_ROOM:
        let isExits = false
        let data = state.RoomRegister.map(item => {
          if (item.id === action.payload.id) { // trùng id
            isExits = true
            return {...item, checked:false}
          } else {
            return {...item, checked:true}
          }
        })
        // trả về false nếu có tên trong list chọn đăng ký
        if (!isExits) data.push({...action.payload,checked:true})
        draft.loading = false
        draft.Room = state.Room.map(item => {
          return item.id === action.payload.id
            ? { ...item,  checked: !item.checked}
            : { ...item}
          // bắt sự kiện click trùng tên thì đổi checked
        })
        draft.RoomRegister = data.filter(item=>item.checked==true)
        break;

        
      case types.REGISTRATION_LIST_ROOM_REQUESTED:
        draft.loading = true
        draft.RoomRegister = []
        draft.RegisteredRoom = []
        break
      case types.REGISTRATION_LIS_ROOM_SUCCESS:
        draft.loading = false
        draft.RoomRegister = action.payload.map(item => {
          item.checked = true
          item.isDelete = false
          return item
        })
        draft.RegisteredRoom = action.payload.map(item => {
          item.checked = true
          item.isDelete = false
          return item
        })
        break

      case types.UPDATE_ROOM_REQUESTED:
        draft.loading = true
        break
      case types.UPDATE_ROOM_SUCCESS:
        console.log("RoomRegister", state.RoomRegister)
        // console.log("RegisteredRoom",state.RegisteredRoom);
        // console.log("RoomAfterDelete",state.RoomAfterDelete);
        // console.log("Room",state.Room);
        draft.loading = false
        draft.RegisteredRoom = state.RoomRegister
        break

      case types.DELETE_ROOM_REQUESTED:
        draft.loading = true
        break
      case types.DELETE_ROOM_SUCCESS:
        console.log("RoomAfterDelete", state.RoomAfterDelete)
        draft.loading = false
        draft.RoomRegister = state.RoomAfterDelete
        break

      case types.SELECT_ROOM_DELETE:
        console.log("action.payload", action.payload)
        const dataDelete = state.RoomRegister.map(item => {
          return item.id === action.payload.id
            ? { ...item, isDelete: true }
            : { ...item }
        })
        draft.RoomRegister = dataDelete
        console.log(
          "Room delete",
          dataDelete.filter(item => item.isDelete == false)
        )
        draft.RoomAfterDelete = dataDelete.filter(
          item => item.isDelete == false
        )

        break

      case types.GET_ITEM_FAILED:
        draft.loading = false
        break
      default:
        return state
    }
  })
