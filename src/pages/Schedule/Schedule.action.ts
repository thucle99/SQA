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

export const firstSchedule = payload => {
  return {
    type: types.FIRST_SCHEDULE,
    payload
  }
}

export const nextSchedule = payload => {
  return {
    type: types.NEXT_SCHEDULE,
    payload
  }
}

export const backSchedule = payload => {
  return {
    type: types.BACK_SCHEDULE,
    payload
  }
}

export const endSchedule = payload => {
  return {
    type: types.END_SCHEDULE,
    payload
  }
}

export const getItemFailed = payload => ({
  type: types.GET_ITEM_FAILED,
  payload
})
