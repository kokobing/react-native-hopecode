import React, { Component } from 'react';
import { Image } from 'react-native';


// redux 相关
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../redux/actions';

import view from './singlePageview';

class ScreenHome extends Component {

  static navigationOptions = {
    title: '测试页1',
    headerStyle: { backgroundColor: '#1fae66' },
    headerTintColor: '#fff',
    
  };

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }
  componentDidMount() {}
  
  changeReduxStore(userInfo) {
    // 设置 redux store
    this.props.setUserInfo(userInfo);
  }


  render() {
    return view(this);
  }
}

// 关联 redux store
function mapStateToProps(state) {
  return {
    userInfo: state.reducers.userInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenHome);
