
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';

// redux 相关
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../redux/actions';

import view from './HomeScreenview';


 class ScreenHome extends Component{

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
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