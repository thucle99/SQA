import React from "react"
import { BrowserRouter } from "react-router-dom"
import ProductRoutes from "./ProductRoutes"
import LoginRoutes from "./LoginRoutes"
import HomeRoutes from "./HomeRoutes"
import CourseRegisterRoutes from "./CourseRegisterRoutes"
import ScheduleRouters from "./ScheduleRouters"

export default function Routes() {
  return (
    <BrowserRouter>
      <HomeRoutes />
      <ProductRoutes />
      <LoginRoutes />
      <CourseRegisterRoutes />
      <ScheduleRouters />
    </BrowserRouter>
  )
}
