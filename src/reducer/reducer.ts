import { combineReducers } from "redux"
import { AppReducer } from "src/App/App.reducer"
import { loginReducer } from "src/pages/Login/Login.reducer"
import { CourseListReducer } from "src/pages/CourseRegister/CourseRegister.reducer"
import { ScheduleReducer } from "src/pages/Schedule/Schedule.reducer"

const rootReducer = combineReducers({
  app: AppReducer,
  login: loginReducer,
  courseList: CourseListReducer,
  schedule: ScheduleReducer
})

export default rootReducer
