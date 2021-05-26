import { combineReducers } from "redux"
import { AppReducer } from "src/App/App.reducer"
import { loginReducer } from "src/pages/Login/Login.reducer"
import { ProductListReducer } from "src/pages/Product/ProductList/ProductList.reducer"
import { CourseListReducer } from "src/pages/CourseRegister/CourseRegister.reducer"
import { ScheduleReducer } from "src/pages/Schedule/Schedule.reducer"
import { productItemReducer } from "src/pages/Product/ProductItem/ProductItem.reducer"

const rootReducer = combineReducers({
  app: AppReducer,
  login: loginReducer,
  productList: ProductListReducer,
  productItem: productItemReducer,
  courseList: CourseListReducer,
  schedule: ScheduleReducer
})

export default rootReducer
