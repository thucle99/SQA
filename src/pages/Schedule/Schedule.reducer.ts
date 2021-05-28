import produce from "immer"
import * as types from "./Schedule.constants"

const initialState = {
  loading: false,
  RegisteredRoom: [] as Room[],
  page: 1,
  LessonOne: [{}, {}, {}, {}, {}, {}, {}],
  LessonThree: [{}, {}, {}, {}, {}, {}, {}],
  LessonFive: [{}, {}, {}, {}, {}, {}, {}],
  LessonSeven: [{}, {}, {}, {}, {}, {}, {}]
}

export const ScheduleReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.REGISTRATION_LIST_ROOM_REQUESTED:
        draft.loading = true
        draft.RegisteredRoom = []
        break
      case types.REGISTRATION_LIS_ROOM_SUCCESS:
        let ArrSchedule = [
          [{}, {}, {}, {}, {}, {}, {}], // tiết 1
          [{}, {}, {}, {}, {}, {}, {}],
          [{}, {}, {}, {}, {}, {}, {}],
          [{}, {}, {}, {}, {}, {}, {}],
          [{}, {}, {}, {}, {}, {}, {}],
          [{}, {}, {}, {}, {}, {}, {}],
          [{}, {}, {}, {}, {}, {}, {}],
          [{}, {}, {}, {}, {}, {}, {}]
        ]
        for (let j = 0; j < action.payload.length; j++) {
          ArrSchedule[action.payload[j].kipHoc[0]][
            action.payload[j].ngayHoc[0]
          ] = action.payload[j]
        }
        draft.LessonOne = ArrSchedule[1]
        draft.LessonThree = ArrSchedule[3]
        draft.LessonFive = ArrSchedule[5]
        draft.LessonSeven = ArrSchedule[7]
        draft.loading = false
        draft.RegisteredRoom = action.payload
        break

      case types.FIRST_SCHEDULE:
        draft.page = 1
        break

      case types.NEXT_SCHEDULE:
        console.log("vao day")

        draft.page = state.page + 1
        break

      case types.BACK_SCHEDULE:
        draft.page = state.page - 1
        break

      case types.END_SCHEDULE:
        draft.page = 16
        break
      default:
        return state
    }
  })
