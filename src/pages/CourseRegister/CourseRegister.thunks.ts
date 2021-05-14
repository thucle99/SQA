import * as actions from "./CourseRegister.action"
import { getCourseApi } from "src/apis/course.api"
import { getRoomApi } from "src/apis/room.api"
import { registerRoomApi } from "src/apis/register.api"

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

export const registerRoom = data => dispatch => {
  dispatch(actions.registerRoomRequested())
  return registerRoomApi(data)
    .then(res => dispatch(actions.registerRoomSuccess(res)))
    .catch(err => Promise.reject(dispatch(actions.getItemFailed(err))))
}
