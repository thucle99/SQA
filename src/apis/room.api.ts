import axios from "axios"
const token = localStorage.getItem("token")
export const getRoomApi = (id): Promise<ResGetRoomApi> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      axios
        .get(`http://localhost:8080/dangky/dslhp/${id}`, {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(res => {
          resolve(res.data)
          console.log("list phòng", res.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }, 100)
  })
