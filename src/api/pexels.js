import request from '@/utils/request'
import axios from 'axios'

/**
 * 获取图片数据列表
 */

export const getPexelsList = async (data) => {
  if (!data.searchText) {
    const res = await axios.post('/api/search/random', {
      ...data,
      withExif: true,
      withPeople: true,
      withStacked: true
    })
    return res.data
  }
  const res = await axios.post('/api/search/smart', {
    ...data,
    withExif: true,
    withPeople: true,
    withStacked: true,
    query: data.searchText ? data.searchText : '照片'
  })
  return res.data.assets.items
}
/**
 * 获取搜索提示
 */
export const getHint = (q) => {
  return request({
    url: '/pexels/hint',
    params: {
      q
    }
  })
}
/**
 * 获取推荐主题
 */
export const getThemes = () => {
  return request({
    url: '/pexels/themes'
  })
}

/**
 * 获取指定图片数据
 */
export const getPexelsFromId = async (id) => {
  const res = await axios.get(`/api/assets/${id}`, {})
  const e = res.data
  return {
    ...e,
    title: e.originalFileName,
    author: e.owner.name,
    photo: `/api/assets/${e.id}/thumbnail`,
    photoWidth: e.exifInfo.exifImageWidth,
    photoHeight: e.exifInfo.exifImageHeight
  }
}
