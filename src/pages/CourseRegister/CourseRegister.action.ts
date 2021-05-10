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

export const getRoomListRequested = () => ({
  type: types.GET_ROOM_REQUESTED
})

export const getRoomListSuccess = payload => {
  return {
    type: types.GET_ROOM_SUCCESS,
    payload
  }
}

export const selectRoom = payload => {
  return {
    type: types.SELECT_ROOM,
    payload
  }
}

export const getItemFailed = payload => ({
  type: types.GET_ITEM_FAILED,
  payload
})
