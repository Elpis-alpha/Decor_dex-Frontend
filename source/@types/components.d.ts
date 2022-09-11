import common from '../utils/common.json'

import homeData from '../utils/homeData.json'


type commonType = typeof common

type homeDataType = typeof homeData

interface user {

  _id: string

  username: string

  email: string

  password: string

  name: string

  phone: string

  createdAt: string

  updatedAt: string

}

interface product {

  _id: string

  name: string

  description: string

  price: number

  quantity: number

  categoryID: string

  sectionID: string[] // birthday, anniversary

  discountID: string

  images: {

    small: string

    normal: string

  }[]

  createdAt: string

  updatedAt: string

}

interface combo {

  _id: string

  name: string

  description: string

  price: number

  products: {

    productID: string

    quantity: string

  }[]

  quantity: number

  discountID: string

  images: {

    small: string

    normal: string

  }[]

  createdAt: string

  updatedAt: string

}

interface discount {

  _id: string

  name: string

  description: string

  percent: number

  active: boolean

  createdAt: string

  updatedAt: string

}

interface cart {

  _id: string

  userID: string

  cartItems: {

    productID: string

    quantity: string

    type: "product" | "combo"

  }[]

  createdAt: string

  updatedAt: string

}

interface order {

  _id: string

  userID: string

  orderItems: {

    productID: string

    quantity: string

    type: "product" | "combo"

  }[]

  payment: {

    amount: number

    status: string

    data: any

  }

  createdAt: string

  updatedAt: string

}

interface category {

  _id: string

  name: string // baloon, cake, pizza, etc

  description: string

  createdAt: string

  updatedAt: string

}

interface section {

  _id: string

  name: string // anniversary, birthday

  description: string

  createdAt: string

  updatedAt: string

}

interface ElpisImageType {

  src: string

  alt?: string

  title?: string

  removeNext?: boolean

  remove?: boolean

  fullSize?: string

}

interface ProductCardType {

  common: commonType

  productData: product

}

interface ProductComboType {

  common: commonType

  comboData: combo

}