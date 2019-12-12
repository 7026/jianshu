import * as constants from './constants'
import Axios from 'axios'
import { fromJS } from 'immutable'

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})
export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
})
//mouseLeave
export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
})
export const changePage = page => ({
  type: constants.CHANGE_PAGE,
  page
})
export const getList = () => {
  return dispatch => {
    Axios.get('/api/headerList.json')
      .then(res => {
        const { data } = res
        dispatch(changeList(data.data))
      })
      .catch(error => {
        console.log(error)
      })
  }
}
/*-----------------------------*/
const changeList = data => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  // Math.ceil  取整
  totalPage: Math.ceil(data.length / 10)
})
