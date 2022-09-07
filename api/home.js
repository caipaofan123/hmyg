import fly from '@/until/request.js'
export const getBanners = () => fly.get('/home/swiperdata')
export const getNavList = () => fly.get('/home/catitems')
export const getFloorList = () => fly.get('/home/floordata')
