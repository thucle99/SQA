import { getRegistrationListApi } from "src/apis/registrationList.api"
import * as actions from "./Schedule.action"

export const getRegistrationList = () => dispatch => {
  dispatch(actions.registrationListRoomRequested())
  return getRegistrationListApi()
    .then(res => dispatch(actions.registerListRoomSuccess(res)))
    .catch(err => Promise.reject(dispatch(actions.getItemFailed(err))))
}
