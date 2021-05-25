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
// get list Object

export const getRoomListRequested = () => ({
  type: types.GET_ROOM_REQUESTED
})
export const getRoomListSuccess = payload => {
  return {
    type: types.GET_ROOM_SUCCESS,
    payload
  }
}
// get list room of object

export const registerRoomRequested = () => ({
  type: types.REGISTER_ROOM_REQUESTED
})
export const registerRoomSuccess = payload => {
  return {
    type: types.REGISTER_ROOM_SUCCESS,
    payload
  }
}
// Register room

export const updateRoomRequested = () => ({
  type: types.UPDATE_ROOM_REQUESTED
})
export const updateRoomSuccess = payload => {
  return {
    type: types.UPDATE_ROOM_SUCCESS,
    payload
  }
}
// Update room

export const registrationListRoomRequested = () => ({
  type: types.REGISTRATION_LIST_ROOM_REQUESTED
})
export const registerListRoomSuccess = payload => {
  return {
    type: types.REGISTRATION_LIS_ROOM_SUCCESS,
    payload
  }
}
// List of registered subjects

export const selectRoom = payload => {
  return {
    type: types.SELECT_ROOM,
    payload
  }
}

export const selectRoomDelete = payload => {
  return {
    type: types.SELECT_ROOM_DELETE,
    payload
  }
}

export const getItemFailed = payload => ({
  type: types.GET_ITEM_FAILED,
  payload
})
