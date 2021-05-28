import * as types from "./Schedule.constants"

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

export const getItemFailed = payload => ({
  type: types.GET_ITEM_FAILED,
  payload
})
