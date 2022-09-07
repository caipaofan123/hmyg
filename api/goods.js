import fly from '@/until/request.js'

export const getGoodsList = (data) => fly.get('/goods/search', data)
