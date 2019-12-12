import React, { Component } from 'react'
import { TopicWrapper, TopicItem } from '../style'

class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        <TopicItem>
          <img
            className="topic-pic"
            alt=""
            src="https://upload.jianshu.io/users/upload_avatars/2594450/a5bbf755-a88e-42da-9eb7-eb4c0e895683.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
          />
          社会热点
        </TopicItem>
      </TopicWrapper>
    )
  }
}

export default Topic
