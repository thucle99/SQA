import axios from "axios"
const token = localStorage.getItem("token")
export const updateRegisterRoomApi = (data): Promise<ResGetRoomApi> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("data sua dang ky", data)

      axios
        .put("http://localhost:8080/suadangky", data, {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(res => {
          // console.log("sua dang ky", res.data)
          resolve(res.data)
        })
        .catch(function (error) {
          reject(new Error(error))
        })
    }, 100)
  })
