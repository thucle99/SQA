import axios from "axios"
export const loginApi = ({
  username,
  password
}: ReqLogin): Promise<ResLoginApi> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      axios
        .post("http://localhost:8080/login", {
          username,
          password
        })
        .then(res => {
          resolve({
            data: {
              access_token: "82jdu82193yh90sad83hxfgsd"
            },
            message: "Login thành công"
          })
          console.log("res", res)
        })
        .catch(function (error) {
          reject(new Error("Login thất bại"))
        })
    }, 100)
  })
