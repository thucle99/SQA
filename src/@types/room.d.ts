interface Room {
  id: number
  kipHoc: any
  ngayHoc: any
  nhomTH: 1
  phong: string
  siSoToiDa: number
  soTC: number
  ten: string
  tuanHoc: any
  daDK: boolean
  checked: boolean
  isDelete: boolean
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
