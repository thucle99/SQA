import * as types from "./CourseRegister.constants"
import produce from "immer"

const initialState = {
  loading: false,
  Course: [] as Course[],
  Room: [] as Room[],
  RoomRegister: [] as Room[]
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
          if (state.RoomRegister.some(obj => obj.id === item.id)) {
            item.checked = true
          } else item.checked = false
          return item
        })
        break

      case types.SELECT_ROOM:
        let a = true
        let data = state.RoomRegister.map(item => {
          if (item.ten === action.payload.ten) {
            a = false
            return (item = action.payload)
          } else {
            return item
          }
        })
        if (a) data.push(action.payload)

        draft.loading = false
        draft.Room = state.Room.map(item => {
          return item.id === action.payload.id
            ? { ...item, checked: true }
            : { ...item, checked: false }
        })
        draft.RoomRegister = data
        break

      case types.GET_ITEM_FAILED:
        draft.loading = false
        break
      default:
        return state
    }
  })
