import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl:
        'https://upload.jianshu.io/users/upload_avatars/2594450/a5bbf755-a88e-42da-9eb7-eb4c0e895683.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
    {
      id: 2,
      title: '手绘',
      imgUrl:
        'https://upload.jianshu.io/users/upload_avatars/2594450/a5bbf755-a88e-42da-9eb7-eb4c0e895683.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    }
  ]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
