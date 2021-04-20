import React, { lazy, Suspense } from "react"
import { Switch } from "react-router-dom"
import AuthenticatedGuard from "src/guards/AuthenticatedGuard"
import { PATH } from "src/constants/paths"
import Loading from "src/components/Loading/Loading"
const CourseRegister = lazy(
  () => import("src/pages/CourseRegister/CourseRegister")
)

export default function CourseRegisterRoutes() {
  return (
    <Switch>
      <AuthenticatedGuard
        exact
        path={PATH.CourseRegister}
        component={() => (
          <Suspense fallback={<Loading />}>
            <CourseRegister />
          </Suspense>
        )}
      />
    </Switch>
  )
}
