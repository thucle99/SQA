import produce from "immer"
import { message } from "antd"
import * as types from "./CourseRegister.constants"
import { checkUpdateData, checkSchedule } from "./handleFunction"

const initialState = {
  loading: false,
  Course: [] as Course[],
  Room: [] as Room[], // list room
  RoomRegister: [] as Room[], // list room selected
  RegisteredRoom: [] as Room[], // list room is registered
  messageSuccess: "",
  error: ""
}

const warning = () => {
  message.warning(types.ERROR_MESSAGE)
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
      // check id trùng trong room chọn thì check=true( check mảng trong mảng)

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
        let data: any
        let roomSelect: any
        if (checkSchedule(state.RoomRegister, action.payload) == true) {
          roomSelect = state.Room
          data = state.RoomRegister
          warning()
        } else {
          data = state.RoomRegister.map(item => {
            if (item.id === action.payload.id) {
              // trùng id
              isExits = true
              return { ...item, checked: !item.checked }
            } else {
              return { ...item }
            }
          })
          // trả về false nếu có tên trong list chọn đăng ký
          if (!isExits) data.push({ ...action.payload, checked: true })

          roomSelect = state.Room.map(item => {
            return item.id === action.payload.id
              ? { ...item, checked: !item.checked }
              : { ...item }
            // bắt sự kiện click trùng tên thì đổi checked
          })
        }
        draft.loading = false
        draft.Room = roomSelect
        draft.RoomRegister = data.filter(item => item.checked === true)
        break

      case types.UPDATE_ROOM_REQUESTED:
        draft.loading = true
        break
      case types.UPDATE_ROOM_SUCCESS:
        const dataUpdate = state.RoomRegister.map(item => {
          return { ...item, daDK: true }
        })

        // console.log("room",state.Room.map(item => {
        //     if (
        //       checkUpdateData(dataUpdate, state.RegisteredRoom).some(
        //         obj => obj.id === item.id
        //       )
        //     ) {
        //       return { ...item, daDK: false }
        //     } else return item
        //   }));
        console.log("dataUpdate", dataUpdate)

        draft.messageSuccess = action.payload
        draft.loading = false
        draft.RegisteredRoom = dataUpdate
        draft.RoomRegister = dataUpdate
        draft.Room = state.Room.map(item => {
          if (
            checkUpdateData(dataUpdate, state.RegisteredRoom).some(
              obj => obj.id === item.id
            )
          ) {
            return { ...item, daDK: false }
          } else return item
        })
        break

      case types.GET_ITEM_FAILED:
        draft.loading = false
        break
      default:
        return state
    }
  })
