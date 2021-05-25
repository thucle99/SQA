import axios from "axios"
const token = localStorage.getItem("token")
export const registerRoomApi = (data): Promise<ResGetRoomApi> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("data đăng ký", data)
      axios
        .put("http://localhost:8080/updatedangky", data, {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(res => {
          resolve(res.data)
        })
        .catch(function (error) {
          reject(new Error(error))
        })
    }, 100)
  })
