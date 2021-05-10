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
          if (state.RoomRegister.some(obj => obj.id == item.id)) {
            item.checked = true
          } else item.checked = false
          return item
        })
        break

      case types.SELECT_ROOM:
        draft.loading = false
        draft.Room = state.Room.map(item => {
          return item.id === action.payload.id
            ? { ...item, checked: true }
            : { ...item, checked: false }
        })
        const finalRoom = [...state.RoomRegister, action.payload]
        draft.RoomRegister = finalRoom
        break

      case types.GET_ITEM_FAILED:
        draft.loading = false
        break
      default:
        return state
    }
  })
