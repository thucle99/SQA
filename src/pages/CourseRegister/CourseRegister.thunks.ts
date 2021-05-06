import * as actions from "./CourseRegister.action"
import { getCourseApi } from "src/apis/course.api"

export const getCourseList = () => dispatch => {
  dispatch(actions.getCourseListRequested())
  return getCourseApi()
    .then(res => dispatch(actions.getCourseListSuccess(res)))
    .catch(err => Promise.reject(dispatch(actions.getCourseListFailed(err))))
}
