import {request} from 'network/request.js'

export function getGoodsDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor (itemInfo, column, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = column
    this.services = services.slice(0,3)
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class Shops {
  constructor (shopInfo) {
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
  }
}

export class GoodsParam {
  constructor(info, rule) {
    this.image = info.images? info.images[0]: ''
    this.infos = info.set
    this.sizes = rule.tables[0]
  }
}