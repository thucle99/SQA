import * as actions from "./CourseRegister.action"
import { getCourseApi } from "src/apis/course.api"
import { getRoomApi } from "src/apis/room.api"
import { registerRoomApi } from "src/apis/register.api"
import { getRegistrationListApi } from "src/apis/registrationList.api"
import { updateRegisterRoomApi } from "src/apis/updateRegister.api"

export const getCourseList = () => dispatch => {
  dispatch(actions.getCourseListRequested())
  return getCourseApi()
    .then(res => dispatch(actions.getCourseListSuccess(res)))
    .catch(err => Promise.reject(dispatch(actions.getItemFailed(err))))
}

export const getRoomList = id => dispatch => {
  dispatch(actions.getRoomListRequested())
  return getRoomApi(id)
    .then(res => dispatch(actions.getRoomListSuccess(res)))
    .catch(err => Promise.reject(dispatch(actions.getItemFailed(err))))
}

export const getRegistrationList = () => dispatch => {
  dispatch(actions.registrationListRoomRequested())
  return getRegistrationListApi()
    .then(res => dispatch(actions.registerListRoomSuccess(res)))
    .catch(err => Promise.reject(dispatch(actions.getItemFailed(err))))
}

export const registerRoom = data => dispatch => {
  dispatch(actions.registerRoomRequested())
  return registerRoomApi(data)
    .then(res => dispatch(actions.registerRoomSuccess(res)))
    .catch(err => Promise.reject(dispatch(actions.getItemFailed(err))))
}

export const updateRoom = data => dispatch => {
  dispatch(actions.updateRoomRequested())
  return updateRegisterRoomApi(data)
    .then(res => dispatch(actions.updateRoomSuccess(res)))
    .catch(err => Promise.reject(dispatch(actions.getItemFailed(err))))
}

export const deleteRoom = data => dispatch => {
  dispatch(actions.deleteRoomRequested())
  return updateRegisterRoomApi(data)
    .then(res => dispatch(actions.deleteRoomSuccess(res)))
    .catch(err => Promise.reject(dispatch(actions.getItemFailed(err))))
}
