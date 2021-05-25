import axios from "axios"
const token = localStorage.getItem("token")

export const getScheduleApi = id => {
  return axios.get(`http://localhost:8080/dangky/dslhp/${id}`, {
    headers: {
      Authorization: "Bearer " + token
    }
  })
}
