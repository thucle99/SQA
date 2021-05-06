import * as types from "./CourseRegister.constants"

export const getCourseListRequested = () => ({
  type: types.GET_COURSE_REQUESTED
})

export const getCourseListSuccess = payload => {
  return {
    type: types.GET_COURSE_SUCCESS,
    payload
  }
}

export const getCourseListFailed = payload => ({
  type: types.GET_COURSE_FAILED,
  payload
})
