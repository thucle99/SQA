import * as types from "./CourseRegister.constants"
import produce from "immer"

const initialState = {
  loading: false,
  Course: [] as Course[]
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
      case types.GET_COURSE_FAILED:
        draft.loading = false
        break
      default:
        return state
    }
  })
