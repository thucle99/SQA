import React from "react"
import { BrowserRouter } from "react-router-dom"
import ProductRoutes from "./ProductRoutes"
import LoginRoutes from "./LoginRoutes"
import HomeRoutes from "./HomeRoutes"
import CourseRegisterRoutes from "./CourseRegisterRoutes"

export default function Routes() {
  return (
    <BrowserRouter>
      <HomeRoutes />
      <ProductRoutes />
      <LoginRoutes />
      <CourseRegisterRoutes />
    </BrowserRouter>
  )
}
