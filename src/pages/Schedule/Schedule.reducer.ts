import produce from "immer"
import { SIGUSR1 } from "node:constants"
import * as types from "./Schedule.constants"

const initialState = {
  loading: false,
  RegisteredRoom: [] as Room[],
  LessonOne: [{},{},{},{},{},{},{}],
  // LessonTwo: [{},{},{},{},{},{},{}],
  LessonThree: [{},{},{},{},{},{},{}],
  // LessonFour: [{},{},{},{},{},{},{}],
  LessonFive: [{},{},{},{},{},{},{}],
  // LessonSix: [{},{},{},{},{},{},{}],
  LessonSeven: [{},{},{},{},{},{},{}],
  // ArrSchedule: [
  //   [{},{},{},{},{},{},{}],
  //   [{},{},{},{},{},{},{}],
  //   [{},{},{},{},{},{},{}],
  //   [{},{},{},{},{},{},{}],
  //   [{},{},{},{},{},{},{}],
  //   [{},{},{},{},{},{},{}],
  //   [{},{},{},{},{},{},{}],
  //   [{},{},{},{},{},{},{}],
  // ]
}

export const ScheduleReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.REGISTRATION_LIST_ROOM_REQUESTED:
        draft.loading = true
        draft.RegisteredRoom = []
        break
      case types.REGISTRATION_LIS_ROOM_SUCCESS:
        const a1 = action.payload.filter(item => item.kipHoc[0] === 1)
        console.log("action", action.payload)
        console.log("a1 ne", a1)
        let ArrSchedule= [
          [{},{},{},{},{},{},{}],
          [{},{},{},{},{},{},{}],
          [{},{},{},{},{},{},{}],
          [{},{},{},{},{},{},{}],
          [{},{},{},{},{},{},{}],
          [{},{},{},{},{},{},{}],
          [{},{},{},{},{},{},{}],
          [{},{},{},{},{},{},{}],
        ]
        // for (let i = 0; i < 7; i++) {
          for(let j=0;j<action.payload.length;j++){
            ArrSchedule[action.payload[j].kipHoc[0]][action.payload[j].ngayHoc[0]] =action.payload[j]
            console.log("kip hoc",action.payload[j].kipHoc[0],action.payload[j].ngayHoc[0]);
            // console.log("array", ArrSchedule)
            // console.log("ngay hoc",action.payload[j].ngayHoc[0]);
            
          // }
          // console.log("lesson[i].ngayHoc[0]", a1[i].ngayHoc[0])
        }
        console.log("array", ArrSchedule)
        // console.log("phan tu 0", ArrSchedule[0])
        draft.LessonOne=ArrSchedule[1];
        draft.LessonThree=ArrSchedule[3];
        draft.LessonFive=ArrSchedule[5];
        draft.LessonSeven=ArrSchedule[7];

        draft.loading = false
        draft.RegisteredRoom = action.payload
        // draft.LessonOne= ac
        break

      case types.GET_ITEM_FAILED:
        draft.loading = false
        break
      default:
        return state
    }
  })
