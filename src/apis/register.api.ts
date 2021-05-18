import axios from "axios"
const token = localStorage.getItem("token")
export const registerRoomApi = (data): Promise<ResGetRoomApi> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data đăng ký", data)
      axios
        .put("http://localhost:8080/updatedangky", data, {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(res => {
          console.log("res", res.data)

          resolve(res.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }, 100)
  })
