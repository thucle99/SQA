import axios from "axios"
const token = localStorage.getItem("token")
export const getRegistrationListApi = (): Promise<ResGetRoomApi> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      axios
        .get("http://localhost:8080/xemtkb", {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(res => {
          resolve(res.data)
          // console.log("lịch học đã đăng ký...", res.data)
        })
        .catch(function (error) {
          reject(new Error(error))
        })
    }, 100)
  })
