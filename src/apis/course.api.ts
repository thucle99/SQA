import axios from "axios"
export const getCourse = (): Promise<ResGetCourseApi> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve({
      //     data: {
      //       courses: []
      //     },
      //     message: "Lấy sản phẩm thành công"
      //   })
      axios
        .get("http://localhost:8080/dangky/dslhp/1")
        .then(res => {
          resolve({
            data: {
              courses: []
            },
            message: "Lấy sản phẩm thành công"
          })
          console.log(res.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    }, 100)
  })
