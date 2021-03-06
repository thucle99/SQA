interface Course {
  id: number
  mota: string
  soTC: number
  ten: string
}

interface ResGetCourseApi extends Res {
  data: {
    courses: Course[]
  }
}

interface ResGetCourse extends ActionRedux {
  payload: ResGetCourseApi
}

interface ResGetCourseItemApi extends Res {
  data: {
    course: Course
  }
}

interface ResGetCourseItem extends ActionRedux {
  payload: ResGetCourseItemApi
}
