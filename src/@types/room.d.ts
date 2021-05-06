interface Room {
  id: number
  kiphoc: any
  ngayhoc: any
  nhomTH: 1
  phong: string
  siSoToiDa: number
  soTC: number
  ten: string
  tuanHoc: any
}

interface ResGetRoomApi extends Res {
  data: {
    products: Room[]
  }
}

interface ResGetRoom extends ActionRedux {
  payload: ResGetProductApi
}

interface ResGetRoomItemApi extends Res {
  data: {
    product: Room
  }
}

interface ResGetRoomItem extends ActionRedux {
  payload: ResGetRoomItemApi
}