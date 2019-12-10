import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'

import {
  Button,
  Addition,
  NavSearch,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from './style'

class Header extends Component {
  getListArea = () => {
    //  focused, list, page  为immutable 数据类型   不支持 list[i]形式书写
    const { focused, list, page, handleMouseEnter } = this.props
    const jsList = list.toJS()
    const pageList = []
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      pageList.push(<SearchInfoItem key={i}>{jsList[i]}</SearchInfoItem>)
    }

    if (focused) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { focused, handleInputBlur, handleInputFocus } = this.props
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition classNames="slide" in={focused} timeout={200}>
              <NavSearch
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                className={focused ? 'focused' : ''}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont' : 'iconfont'}>
              &#xe621;
            </i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting ">
            <i className="iconfont">&#xe600;</i>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = state => ({
  focused: state.getIn(['header', 'focused']),
  list: state.getIn(['header', 'list']),
  page: state.getIn(['header', 'page'])
})

function mapDispatchToProps(dispatch) {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
