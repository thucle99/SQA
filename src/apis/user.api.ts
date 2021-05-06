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
              access_token: res.data.accessToken
            },
            message: "Login thành công"
          })
        })
        .catch(function (error) {
          reject(new Error("Tài khoản hoặc mật khẩu không chính xác"))
        })
    }, 100)
  })
