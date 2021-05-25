import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import AuthenticatedGuard from "src/guards/AuthenticatedGuard"
import { PATH } from "src/constants/paths"
import Loading from "src/components/Loading/Loading"
const Schedule = lazy(() => import("src/pages/Schedule/Schedule"))

export default function ScheduleRouters() {
  return (
    <Switch>
      <AuthenticatedGuard
        exact
        path={PATH.Schedule}
        component={() => (
          <Suspense fallback={<Loading />}>
            <Schedule />
          </Suspense>
        )}
      />
    </Switch>
  )
}
