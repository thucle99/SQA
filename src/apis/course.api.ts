import axios from "axios"
const token =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0aGFuZyIsImlhdCI6MTYxOTg2MjIyOSwiZXhwIjoxNjE5ODYzMTI5fQ.orzSK58MnULuVVkgy9ZK9BQhxX47iGDr5AESbntdpxJm4Mlx6FseyAbXESXfJWacComJukA78sTEZh7UY_EDSw"
export const getCourse = (): Promise<ResGetCourseApi> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      axios
        .get("http://localhost:8080/dangky", {
          headers: {
            Authorization: token
          }
        })
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
