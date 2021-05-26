import produce from "immer"
import * as types from "./Schedule.constants"

const initialState = {
  loading: false,
  RegisteredRoom: [] as Room[]
}

export const ScheduleReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.REGISTRATION_LIST_ROOM_REQUESTED:
        draft.loading = true
        draft.RegisteredRoom = []
        break
      case types.REGISTRATION_LIS_ROOM_SUCCESS:
        console.log("action", action.payload)

        draft.loading = false
        draft.RegisteredRoom = action.payload
        break

      case types.GET_ITEM_FAILED:
        draft.loading = false
        break
      default:
        return state
    }
  })
