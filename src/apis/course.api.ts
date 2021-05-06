import axios from "axios"
const token = localStorage.getItem("token")
export const getCourseApi = (): Promise<ResGetCourseApi> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      axios
        .get("http://localhost:8080/dangky", {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(res => {
          resolve(res.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    }, 100)
  })
